"use client";

import { ApplicationForm } from "@/components/ApplicationForm";
import { TextLink } from "@/components/TextLink";
import { application } from "@/lib/content";
import { useApplicationsOpen } from "@/lib/use-applications-open";

export function ApplicationsView({ initialOpen }: { initialOpen: boolean }) {
  const open = useApplicationsOpen(initialOpen);

  if (open === false) {
    return (
      <>
        <h1 className="headline mt-5 text-5xl md:text-6xl">
          {application.closedHeadline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.42] text-muted">
          {application.closedBody}
        </p>
        <div className="mt-12">
          <TextLink href="/">Back to Scope</TextLink>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="headline mt-5 text-5xl md:text-6xl">APPLY TO SCOPE</h1>
      <p className="mt-6 max-w-2xl text-lg leading-[1.42] text-muted">
        Tell us who you are, what you’re hoping to find in Scope, and what
        you’d want to bring to the community. We recommend drafting responses in
        a separate document rather than directly into the application form.
      </p>
      <div className="mt-12">{open ? <ApplicationForm /> : null}</div>
    </>
  );
}
