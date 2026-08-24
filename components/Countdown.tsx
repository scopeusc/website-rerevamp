"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

const empty: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function Countdown() {
  const target = new Date(site.applicationsCloseAt).getTime();
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setTime(getRemaining(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const display = time ?? empty;
  const parts = [
    { value: pad(display.days), label: "DAYS" },
    { value: pad(display.hours), label: "HRS" },
    { value: pad(display.minutes), label: "MINS" },
    { value: pad(display.seconds), label: "SECS" },
  ];

  return (
    <div className="panel flex w-fit flex-col gap-3 rounded-2xl px-5 py-4">
      <p className="kicker">Applications close in</p>
      <div
        className="flex items-end gap-3 font-medium tabular-nums"
        aria-hidden={time === null}
      >
        {parts.map((part, index) => (
          <div key={part.label} className="flex items-end gap-3">
            <div className="flex min-w-10 flex-col items-center gap-2">
              <span
                className={`text-lg leading-none text-paper ${time ? "" : "invisible"}`}
              >
                {part.value}
              </span>
              <span className="text-[8px] font-semibold tracking-[0.1em] text-glow">
                {part.label}
              </span>
            </div>
            {index < parts.length - 1 ? (
              <span className="mb-5 text-glow">:</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
