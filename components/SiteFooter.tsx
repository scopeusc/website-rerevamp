export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-6 md:px-8">
        <p className="text-[12px] font-medium tracking-[0.08em] text-muted">
          © 2026 SCOPE USC · LEARN. BUILD. CODE.
        </p>
        <a
          href="https://www.instagram.com/scopeusc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex opacity-80 transition hover:opacity-100"
        >
          <img
            src="/images/instagram-logo-facebook-2-svgrepo-com.svg"
            alt=""
            className="size-4 brightness-0 invert"
          />
        </a>
      </div>
    </footer>
  );
}
