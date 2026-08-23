"use client";

import { FormEvent, useState } from "react";
import { application } from "@/lib/content";
import { TextLink } from "@/components/TextLink";

const fieldClass =
  "w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-paper outline-none placeholder:text-muted/70 focus:border-glow";

function countWords(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium leading-6 text-muted">{label}</span>
      {hint ? <span className="text-xs leading-5 text-muted/80">{hint}</span> : null}
      {children}
    </label>
  );
}

function ChoiceField({
  legend,
  name,
  options,
  required,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium leading-6 text-muted">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="panel flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              checked={value !== undefined ? value === option : undefined}
              onChange={onChange ? () => onChange(option) : undefined}
              className="accent-accent"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function WordArea({
  name,
  words,
  required,
  rows = 6,
}: {
  name: string;
  words?: number;
  required?: boolean;
  rows?: number;
}) {
  const [value, setValue] = useState("");
  const count = countWords(value);

  return (
    <div>
      <textarea
        required={required}
        name={name}
        rows={rows}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={fieldClass}
      />
      {words ? (
        <p
          className={`mt-2 text-xs ${count > words ? "text-glow" : "text-muted"}`}
        >
          {count} / {words} words
        </p>
      ) : null}
    </div>
  );
}

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [wantsCatalyst, setWantsCatalyst] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const form = event.currentTarget;
    const resume = form.elements.namedItem("pdf");
    if (resume instanceof HTMLInputElement && resume.files?.[0]) {
      const file = resume.files[0];
      const isPdf =
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf");
      if (!isPdf) {
        setSubmitError("Resume must be a PDF.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(application.submitUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn’t send your application. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="panel rounded-[28px] p-8">
        <p className="kicker text-accent">Application received</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          You’re in the mix.
        </h2>
        <p className="mt-4 max-w-xl leading-[1.42] text-muted">
          Thanks for applying to Scope. We’ll follow up at your USC email as
          applications move into interviews.
        </p>
        <div className="mt-8">
          <TextLink href="/">Back to Scope</TextLink>
        </div>
      </div>
    );
  }

  return (
    <form
      action={application.submitUrl}
      method="POST"
      encType="multipart/form-data"
      acceptCharset="UTF-8"
      onSubmit={onSubmit}
      className="flex flex-col gap-12"
    >
      <section>
        <p className="kicker text-accent">01 / About you</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Let’s start with the basics.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Name">
            <input required name="name" autoComplete="name" className={fieldClass} />
          </Field>
          <Field label="Pronouns">
            <input required name="pronouns" className={fieldClass} />
          </Field>
          <Field label="Grade">
            <select required name="grade" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select your class standing
              </option>
              {application.grades.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className={fieldClass}
            />
          </Field>
          <div className="md:col-span-2">
            <Field label="Studies">
              <input
                required
                name="studies"
                placeholder="Major, minor, or what you’re studying"
                className={fieldClass}
              />
            </Field>
          </div>
        </div>
      </section>

      <section>
        <p className="kicker text-glow">02 / Your story</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Tell us a little more.
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          <Field label="Why Scope? What are you hoping to find here, and what would you want to bring to the community?">
            <WordArea name="whyScope" words={200} required />
          </Field>
          <Field label="What’s something you’ve been especially excited or interested about lately? It can be big, small, serious, or completely pointless. Tell us about it and why it has your attention.">
            <WordArea name="unexpectedlyYou" words={200} required />
          </Field>
          <Field label="Imagine you’re given an empty room in USC and could transform it any way you want so that people would use it. What do you do?">
            <WordArea name="lifeBetter" words={150} required />
          </Field>
          <Field label="Please briefly describe your experience with software frameworks and web/mobile development. If you have no experience yet, tell us what you’re excited to learn.">
            <WordArea name="devExp" required rows={5} />
          </Field>
        </div>
      </section>

      <section>
        <p className="kicker text-glow">03 / Catalyst</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Interested in recruiting support?
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          <ChoiceField
            legend="Are you interested in joining our Catalyst program?"
            name="catalyst"
            options={application.yesNo}
            required
            value={wantsCatalyst}
            onChange={setWantsCatalyst}
          />
          {wantsCatalyst === "Yes" ? (
            <>
              <Field label="Why do you want to join Catalyst?">
                <WordArea name="whyCatalyst" required rows={5} />
              </Field>
              <Field label="Imagine Catalyst goes really well for you this semester. By the end of it, what’s something you’d be able to do, understand, or feel more confident about that you can’t today?">
                <WordArea name="catalystOutcome" words={150} required />
              </Field>
            </>
          ) : null}
        </div>
      </section>

      <section>
        <p className="kicker text-glow">04 / Background</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          A few last things.
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          <Field
            label="CS classes taken"
            hint="List the computer science courses you’ve taken, or write None."
          >
            <WordArea name="csExp" required rows={4} />
          </Field>
          <Field
            label="Previous applications"
            hint="How many times have you applied to Scope before? Enter 0 if this is your first."
          >
            <input
              required
              type="number"
              name="prevApps"
              min={0}
              step={1}
              inputMode="numeric"
              className={fieldClass}
            />
          </Field>
          <Field label="Resume drop" hint="PDF only.">
            <input
              required
              type="file"
              name="pdf"
              accept="application/pdf,.pdf"
              className={`${fieldClass} file:mr-3 file:rounded-full file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-paper`}
            />
          </Field>
          <Field
            label="Supplemental links"
            hint="Portfolio, GitHub, or anything else you want us to see."
          >
            <input
              name="link"
              inputMode="url"
              placeholder="https://"
              className={fieldClass}
            />
          </Field>
          <Field label="Other commitments">
            <WordArea name="commitments" required rows={4} />
          </Field>
        </div>
      </section>

      <section>
        <p className="kicker text-accent">05 / Demographics</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Just for context.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          These questions are only for demographics. They have no impact on
          your application.
        </p>
        <div className="mt-6 flex flex-col gap-6">
          <Field label="Ethnicity">
            <select
              required
              name="ethnicity"
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              {application.ethnicities.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <ChoiceField
            legend="First-gen"
            name="first-gen"
            options={application.firstGen}
            required
          />
        </div>
        {submitError ? (
          <p className="mt-6 text-sm text-glow">{submitError}</p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition hover:bg-[#6d34e0] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting…" : "Submit application"}
        </button>
      </section>
    </form>
  );
}
