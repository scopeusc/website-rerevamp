import { alumniCompanies } from "@/lib/content";

export function LogoMarquee() {
  const row = [...alumniCompanies, ...alumniCompanies];

  return (
    <div className="overflow-hidden border-y border-white/10 py-6">
      <div className="marquee-track flex w-max gap-12 pr-12">
        {row.map((company, index) => (
          <span
            key={`${company}-${index}`}
            className="font-display text-lg font-medium tracking-wide text-muted/80 uppercase"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
