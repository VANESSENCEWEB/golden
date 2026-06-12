/**
 * Creative Agency — Fixed nav scroll state
 */
export function initNav(selector = ".ca-nav") {
  const nav = document.querySelector(selector);
  if (!nav) return;

  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
