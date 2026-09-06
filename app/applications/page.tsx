import type { Metadata } from "next";
import { ApplicationsView } from "@/components/ApplicationsView";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isApplicationsOpen } from "@/lib/applications";
import { application } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: application.title,
  description: application.description,
};

export default function ApplicationsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader backHref="/" backLabel="Back to Scope" />
      <main className="mx-auto w-full max-w-[920px] flex-1 px-5 py-16 md:px-8">
        <p className="kicker">Applications / Scope USC</p>
        <ApplicationsView initialOpen={isApplicationsOpen()} />
      </main>
      <SiteFooter />
    </div>
  );
}
