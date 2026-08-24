export function ArrowIcon({
  className,
  direction = "up",
}: {
  className?: string;
  direction?: "up" | "down";
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={
          direction === "down"
            ? "M7 7L17 17M17 17H9.5M17 17V9.5"
            : "M7 17L17 7M17 7H9.5M17 7V14.5"
        }
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
