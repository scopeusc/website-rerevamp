"use client";

import { useEffect, useState } from "react";
import { isApplicationsOpen } from "@/lib/applications";

export function useApplicationsOpen(initial: boolean | null = null) {
  const [open, setOpen] = useState<boolean | null>(initial);

  useEffect(() => {
    const tick = () => setOpen(isApplicationsOpen());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return open;
}
