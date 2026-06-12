/**
 * Creative Agency — Animated number counters
 * Usage: <span class="ca-count" data-target="86">0</span>
 */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export function initCounters(selector = ".ca-count", options = {}) {
  const { threshold = 0.6, duration = 1400 } = options;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);

        const el = entry.target;
        const target = parseFloat(el.dataset.target);

        if (reduceMotion) {
          el.textContent = target;
          continue;
        }

        const t0 = performance.now();

        function tick(now) {
          const progress = Math.min(1, (now - t0) / duration);
          el.textContent = Math.round(target * easeOut(progress));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      }
    },
    { threshold }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}
