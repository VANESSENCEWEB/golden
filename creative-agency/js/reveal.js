/**
 * Creative Agency — Scroll reveal observer
 * Usage: add class "ca-reveal" to elements; they get "is-visible" when in view.
 */
export function initReveal(selector = ".ca-reveal", options = {}) {
  const { threshold = 0.18, rootMargin = "0px" } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold, rootMargin }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}
