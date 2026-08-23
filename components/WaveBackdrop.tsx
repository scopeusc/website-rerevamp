"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const WAVE_ASPECT = "2400 / 1824";
const BREAKPOINTS = ["base", "sm", "md", "lg", "xl"] as const;

type LengthValue = string | number;
type Breakpoint = (typeof BREAKPOINTS)[number];

export type WaveBreakpoint<T = LengthValue> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };

type BreakpointMap<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type WaveBackdropProps = {
  /**
   * Offset from the top of the content canvas, as a % of canvas width
   * (not section height). Same unit as left/width, so the composition
   * scales as one piece when the page reflows.
   * With `anchor="center"` or `centerY`, this is the image center.
   * Accepts `{ base, sm, md, lg, xl }` for Tailwind-width breakpoints.
   */
  top?: WaveBreakpoint;
  /**
   * Offset from the left edge of the content canvas, as a % of canvas width.
   * With `anchor="center"` or `centerX`, this is the image center.
   */
  left?: WaveBreakpoint;
  /**
   * Horizontal position of the image center, as a % of canvas width.
   * Use instead of `left` when the box size or rotation should not
   * shift the visual.
   */
  centerX?: WaveBreakpoint;
  /**
   * Vertical position of the image center. `%` is canvas width, same as `top`.
   * Use instead of `top` to pin the midpoint.
   */
  centerY?: WaveBreakpoint;
  /**
   * `start` (default): `top`/`left` are the top-left of the box.
   * `center`: `top`/`left` are the center of the box.
   */
  anchor?: "start" | "center";
  /**
   * Box width. `%` and numbers are fractions of the content canvas.
   * Omit to derive width from height and the image aspect ratio.
   */
  width?: WaveBreakpoint;
  /**
   * Box height. `%` and numbers are fractions of the WaveLayer height.
   * Omit to derive height from width and the image aspect ratio.
   * Set width and height together to stretch (aspect ratio unlocked).
   */
  height?: WaveBreakpoint;
  /** Uniform extra scale. Rotate and scale share transform-origin. */
  scale?: WaveBreakpoint;
  rotate?: WaveBreakpoint;
  /**
   * Scroll lag vs the page, in screen space (stays vertical after rotate).
   * `0` locks to layout. `0.2` is subtle, `0.45` is strong, negative reverses.
   * Accepts `{ base, sm, md, lg, xl }`.
   */
  parallax?: WaveBreakpoint<number>;
  origin?: string;
  opacity?: number;
  priority?: boolean;
  className?: string;
};

function isBreakpointMap<T>(value: WaveBreakpoint<T>): value is BreakpointMap<T> {
  return typeof value === "object" && value !== null;
}

function toMap<T>(value: WaveBreakpoint<T> | undefined): BreakpointMap<T> {
  if (value === undefined) return {};
  if (isBreakpointMap(value)) return value;
  return { base: value };
}

function cascade<T>(map: BreakpointMap<T>, breakpoint: Breakpoint): T | undefined {
  let current: T | undefined;
  for (const key of BREAKPOINTS) {
    if (map[key] !== undefined) current = map[key];
    if (key === breakpoint) return current;
  }
  return current;
}

function asCanvasLength(value: string | number) {
  if (typeof value === "number") {
    return `calc(var(--wave-canvas) * ${value} / 100)`;
  }
  const trimmed = value.trim();
  const percent = trimmed.match(/^(-?\d*\.?\d+)\s*%$/);
  if (percent) {
    return `calc(var(--wave-canvas) * ${percent[1]} / 100)`;
  }
  return trimmed;
}

function asAngle(value: string | number) {
  return typeof value === "number" ? `${value}deg` : value;
}

function asLayerHeight(value: string | number) {
  return typeof value === "number" ? `${value}%` : value.trim();
}

function isActiveParallax(map: BreakpointMap<number>) {
  return BREAKPOINTS.some((breakpoint) => {
    const value = cascade(map, breakpoint);
    return value !== undefined && value !== 0;
  });
}

function useWaveParallax(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      if (motion.matches) {
        el.style.setProperty("--wave-parallax-y", "0px");
        return;
      }

      const strength =
        Number.parseFloat(
          getComputedStyle(el).getPropertyValue("--wave-parallax-strength"),
        ) || 0;

      if (strength === 0) {
        el.style.setProperty("--wave-parallax-y", "0px");
        return;
      }

      const applied =
        Number.parseFloat(el.style.getPropertyValue("--wave-parallax-y")) || 0;
      const rect = el.getBoundingClientRect();
      const viewMid = window.innerHeight / 2;
      const elMid = rect.top + rect.height / 2 - applied;
      el.style.setProperty(
        "--wave-parallax-y",
        `${(elMid - viewMid) * strength}px`,
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    motion.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onScroll);
      el.style.removeProperty("--wave-parallax-y");
    };
  }, [enabled]);

  return ref;
}

export function WaveLayer({
  children,
  className = "",
  canvasMax = "1200px",
}: {
  children: ReactNode;
  className?: string;
  canvasMax?: string;
}) {
  return (
    <div
      className={`wave-layer ${className}`.trim()}
      style={{ "--wave-canvas-max": canvasMax } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function WaveBackdrop({
  top = 0,
  left = 0,
  centerX,
  centerY,
  anchor = "start",
  width,
  height,
  scale = 1,
  rotate = "0deg",
  parallax = 0,
  origin = "center center",
  opacity = 0.4,
  priority = false,
  className = "",
}: WaveBackdropProps) {
  const topMap = toMap(top);
  const leftMap = toMap(left);
  const centerXMap = toMap(centerX);
  const centerYMap = toMap(centerY);
  const widthMap = toMap(width);
  const heightMap = toMap(height);
  const scaleMap = toMap(scale);
  const rotateMap = toMap(rotate);
  const parallaxMap = toMap(parallax);
  const parallaxEnabled = isActiveParallax(parallaxMap);
  const parallaxRef = useWaveParallax(parallaxEnabled);

  const vars: Record<string, string> = {
    "--wave-opacity": String(opacity),
    "--wave-origin": origin,
  };

  for (const breakpoint of BREAKPOINTS) {
    const suffix = breakpoint === "base" ? "" : `-${breakpoint}`;
    const usedTop = cascade(topMap, breakpoint) ?? 0;
    const usedLeft = cascade(leftMap, breakpoint) ?? 0;
    const usedCenterX = cascade(centerXMap, breakpoint);
    const usedCenterY = cascade(centerYMap, breakpoint);
    const usedWidth = cascade(widthMap, breakpoint);
    const usedHeight = cascade(heightMap, breakpoint);
    const usedScale = cascade(scaleMap, breakpoint) ?? 1;
    const usedRotate = cascade(rotateMap, breakpoint) ?? "0deg";
    const usedParallax = cascade(parallaxMap, breakpoint) ?? 0;
    const hasWidth = usedWidth !== undefined;
    const hasHeight = usedHeight !== undefined;
    const stretch = hasWidth && hasHeight;
    const resolvedWidth = usedWidth ?? (hasHeight ? undefined : 100);
    const pinCenterX = anchor === "center" || usedCenterX !== undefined;
    const pinCenterY = anchor === "center" || usedCenterY !== undefined;

    vars[`--wave-top${suffix}`] = asCanvasLength(usedCenterY ?? usedTop);
    vars[`--wave-left${suffix}`] = asCanvasLength(usedCenterX ?? usedLeft);
    vars[`--wave-tx${suffix}`] = pinCenterX ? "-50%" : "0px";
    vars[`--wave-ty${suffix}`] = pinCenterY ? "-50%" : "0px";
    vars[`--wave-width${suffix}`] =
      resolvedWidth !== undefined ? asCanvasLength(resolvedWidth) : "auto";
    vars[`--wave-height${suffix}`] = hasHeight ? asLayerHeight(usedHeight) : "auto";
    vars[`--wave-aspect${suffix}`] = stretch ? "auto" : WAVE_ASPECT;
    vars[`--wave-fit${suffix}`] = stretch ? "fill" : "contain";
    vars[`--wave-scale${suffix}`] = String(usedScale);
    vars[`--wave-rotate${suffix}`] = asAngle(usedRotate);
    vars[`--wave-parallax-strength${suffix}`] = String(usedParallax);
  }

  return (
    <div
      ref={parallaxRef}
      className={`wave-backdrop ${parallaxEnabled ? "wave-backdrop--parallax" : ""} ${className}`.trim()}
      aria-hidden="true"
      style={vars as CSSProperties}
    >
      <Image
        src="/images/wave-texture.png"
        alt=""
        width={2400}
        height={1824}
        priority={priority}
        sizes="1200px"
        className="pointer-events-none h-full w-full max-w-none"
      />
    </div>
  );
}
