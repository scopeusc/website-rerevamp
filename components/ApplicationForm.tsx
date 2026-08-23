"use client";

import { FormEvent, useState } from "react";
import { application } from "@/lib/content";
import { TextLink } from "@/components/TextLink";

const fieldClass =
  "w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-paper outline-none placeholder:text-muted/70 focus:border-glow";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
    <form onSubmit={onSubmit} className="flex flex-col gap-12">
      <section>
        <p className="kicker text-accent">01 / Personal + academic</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Let’s start with the basics.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="First name">
            <input required name="firstName" className={fieldClass} />
          </Field>
          <Field label="Last name">
            <input required name="lastName" className={fieldClass} />
          </Field>
          <Field label="USC email">
            <input required type="email" name="email" className={fieldClass} />
          </Field>
          <Field label="Phone number">
            <input required type="tel" name="phone" className={fieldClass} />
          </Field>
          <Field label="What are you studying?">
            <select required name="major" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a major
              </option>
              {application.majors.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Graduation year">
            <select required name="year" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a year
              </option>
              {application.years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="When are you free?">
            <input required name="availability" className={fieldClass} />
          </Field>
          <Field label="Your USC status">
            <select required name="status" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a status
              </option>
              {application.statuses.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </section>

      <section>
        <p className="kicker text-glow">02 / Experience + interests</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          Tell us what you’re into.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="How much coding have you done?">
            <select required name="coding" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a level
              </option>
              {application.codingLevels.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="What are you most excited to explore?">
            <select required name="interest" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a track
              </option>
              {application.interests.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Portfolio or personal site">
            <input type="url" name="portfolio" className={fieldClass} />
          </Field>
          <Field label="GitHub or a project link">
            <input type="url" name="github" className={fieldClass} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Why do you want to join Scope?">
              <textarea required name="why" rows={4} className={fieldClass} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="What do you want to learn or build?">
              <textarea required name="goals" rows={4} className={fieldClass} />
            </Field>
          </div>
        </div>
        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-medium text-muted">
            Are you ready to join this semester?
          </legend>
          <div className="flex flex-wrap gap-3">
            {["I’m in", "Not right now"].map((option) => (
              <label
                key={option}
                className="panel flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                <input
                  type="radio"
                  name="ready"
                  value={option}
                  required
                  className="accent-accent"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <section>
        <p className="kicker text-glow">03 / Final details</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
          A few last things.
        </h2>
        <div className="mt-6">
          <Field label="Anything else you want us to know?">
            <textarea name="notes" rows={4} className={fieldClass} />
          </Field>
        </div>
        <label className="mt-6 flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" required className="mt-1 accent-accent" />
          I confirm that my details are accurate
        </label>
        <button
          type="submit"
          className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition hover:bg-[#6d34e0]"
        >
          Submit application
        </button>
      </section>
    </form>
  );
}
