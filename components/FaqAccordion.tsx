"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [open, setOpen] = useState(2);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <button
            key={faq.question}
            type="button"
            className="panel rounded-[20px] px-5 py-4 text-left md:px-6"
            onClick={() => setOpen(isOpen ? -1 : index)}
            aria-expanded={isOpen}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-lg font-semibold">{faq.question}</p>
              <span className="font-display text-2xl font-medium text-glow">
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen ? (
              <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-[1.42] text-muted">
                {faq.answer}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
