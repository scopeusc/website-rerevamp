"use client";

import { TextLink } from "@/components/TextLink";
import { useApplicationsOpen } from "@/lib/use-applications-open";

export function HeroActions({
  initialOpen = null,
}: {
  initialOpen?: boolean | null;
}) {
  const open = useApplicationsOpen(initialOpen);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {open ? <TextLink href="/applications">Join Scope</TextLink> : null}
      <TextLink href="/#catalyst" variant="ghost" arrow="down">
        Explore the programs
      </TextLink>
    </div>
  );
}
