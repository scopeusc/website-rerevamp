"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { scrollToCurrentHash } from "@/lib/scroll-to-hash";

type Variant = "primary" | "ghost";

export function TextLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = "up",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: "up" | "down";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-paper hover:bg-[#6d34e0]"
      : "border border-white/15 text-glow hover:border-glow/50 hover:text-paper";

  return (
    <Link
      href={href}
      onClick={() => scrollToCurrentHash(href)}
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon className="size-4" direction={arrow} />
    </Link>
  );
}
