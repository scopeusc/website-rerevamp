/** Next/Link skips navigation when the hash is already current. */
export function scrollToCurrentHash(href: string) {
  const next = new URL(href, window.location.href);
  if (next.origin !== window.location.origin) return;
  if (next.pathname !== window.location.pathname) return;
  if (!next.hash || next.hash !== window.location.hash) return;

  const target = document.getElementById(decodeURIComponent(next.hash.slice(1)));
  if (!target) return;

  target.scrollIntoView();
}
