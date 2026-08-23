import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TextLink } from "@/components/TextLink";
import { sponsorship } from "@/lib/content";

export const metadata: Metadata = {
  title: sponsorship.title,
  description: sponsorship.description,
};

export default function SponsorshipPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader backHref="/" backLabel="Back to Scope" />
      <main className="flex-1">
        <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <div>
            <p className="kicker text-glow">Sponsorship / Scope USC</p>
            <h1 className="headline mt-5 text-5xl md:text-[64px]">
              {sponsorship.headline.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-[1.42] text-muted">
              {sponsorship.body}
            </p>
            <div className="mt-8">
              <TextLink href="/">Back to Scope</TextLink>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[28px] border border-white/12">
            <Image
              src="/images/sponsorship-cover.png"
              alt="Scope USC sponsorship deck cover"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
          <p className="kicker text-accent">01 / Why partner</p>
          <h2 className="headline mt-4 max-w-3xl text-5xl md:text-6xl">
            PUT SUPPORT TO WORK.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.42] text-muted">
            Partnering with Scope means backing hands-on learning, student
            confidence, and a more connected technical community at USC.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sponsorship.reasons.map((item) => (
              <article key={item.title} className="panel rounded-[28px] p-6">
                <p className="kicker text-accent">{item.index}</p>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-[1.42] text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
          <p className="kicker text-glow">02 / What support unlocks</p>
          <h2 className="headline mt-4 text-5xl md:text-6xl">
            MAKE MORE ROOM TO BUILD.
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {sponsorship.unlocks.map((item) => (
              <article
                key={item.title}
                className="panel flex flex-col gap-3 rounded-[24px] px-6 py-6 md:flex-row md:items-center md:justify-between"
              >
                <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-[28px]">
                  {item.title}
                </h3>
                <p className="max-w-xl text-right leading-[1.3] text-muted md:text-end">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
          <p className="kicker text-glow">Let’s build together.</p>
          <h2 className="headline mt-4 max-w-3xl text-5xl md:text-[56px]">
            READY TO BACK THE NEXT BUILD?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.42] text-muted">
            Bring your team, your questions, and your ideas. We’ll bring the
            students ready to make something happen.
          </p>
          <div className="mt-8">
            <TextLink href="/">Back to Scope</TextLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
