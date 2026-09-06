import { site } from "@/lib/content";

export function isApplicationsOpen(now = Date.now()) {
  return now < new Date(site.applicationsCloseAt).getTime();
}
