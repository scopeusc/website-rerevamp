import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { application } from "@/lib/content";

export const metadata: Metadata = {
  title: application.title,
  description: application.description,
};

export default function ApplicationsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader backHref="/" backLabel="Back to Scope" />
      <main className="mx-auto w-full max-w-[920px] flex-1 px-5 py-16 md:px-8">
        <p className="kicker text-glow">Applications / Scope USC</p>
        <h1 className="headline mt-5 text-5xl md:text-6xl">
          MAKE YOUR NEXT MOVE.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.42] text-muted">
          We’re putting the finishing touches on this application. The questions
          below are placeholders for now, but the vibe is simple: tell us who you
          are and what you want to build.
        </p>
        <p className="kicker mt-8 text-accent">Applications open soon</p>
        <div className="mt-12">
          <ApplicationForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
