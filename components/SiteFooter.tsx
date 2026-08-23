import { DiscordIcon, GithubIcon, InstagramIcon } from "@/components/Icons";

const socials = [
  { name: "GitHub", Icon: GithubIcon },
  { name: "Discord", Icon: DiscordIcon },
  { name: "Instagram", Icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-6 md:px-8">
        <p className="text-[12px] font-medium tracking-[0.08em] text-muted">
          © 2026 SCOPE USC · LEARN. BUILD. CODE.
        </p>
        <div className="flex items-center gap-4 text-muted">
          {socials.map(({ name, Icon }) => (
            <span key={name} aria-label={name} className="inline-flex">
              <Icon className="size-4" />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
