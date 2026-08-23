"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { scrollToCurrentHash } from "@/lib/scroll-to-hash";
import { TextLink } from "@/components/TextLink";

export function SiteHeader({
  backHref,
  backLabel,
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-bold tracking-[0.02em]"
        >
          <img
            src="/favicon.ico"
            alt=""
            width={28}
            height={28}
            className="size-7 object-contain"
          />
          SCOPE
        </Link>

        {backHref ? (
          <Link
            href={backHref}
            className="text-sm font-semibold text-glow hover:text-paper"
          >
            {backLabel ?? "Back to Scope"} ↗
          </Link>
        ) : (
          <>
            <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => scrollToCurrentHash(link.href)}
                  className="transition hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <TextLink href="/applications">Join Scope</TextLink>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold tracking-widest uppercase md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? "Close" : "Menu"}
            </button>
          </>
        )}
      </div>

      {!backHref && open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  scrollToCurrentHash(link.href);
                  setOpen(false);
                }}
                className="hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <TextLink href="/applications" className="w-fit">
              Join Scope
            </TextLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
