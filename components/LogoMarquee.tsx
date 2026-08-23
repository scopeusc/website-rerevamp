import { alumniCompanies } from "@/lib/content";

export function LogoMarquee() {
  const row = [...alumniCompanies, ...alumniCompanies];

  return (
    <div className="overflow-hidden border-y border-white/10 py-8">
      <div className="marquee-track flex w-max items-center gap-16 pr-16">
        {row.map((company, index) => {
          const invert =
            "invert" in company && company.invert ? " brightness-0 invert" : "";
          const height =
            "size" in company && company.size === "tall" ? "h-16" : "h-9";

          if ("scale" in company && company.scale === "width") {
            return (
              <div
                key={`${company.name}-${index}`}
                className={`flex ${height} w-44 shrink-0 items-center overflow-hidden`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`h-auto w-full max-w-none${invert}`}
                />
              </div>
            );
          }

          return (
            <img
              key={`${company.name}-${index}`}
              src={company.logo}
              alt={company.name}
              className={`${height} w-auto shrink-0 object-contain${invert}`}
            />
          );
        })}
      </div>
    </div>
  );
}
