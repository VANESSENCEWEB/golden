import { initReveal } from "./reveal.js";
import { initCounters } from "./counters.js";
import { initNav } from "./nav.js";
import { initScrollPin } from "./scroll-pin.js";

export function initCreativeAgency(options = {}) {
  initNav(options.navSelector);
  initReveal(options.revealSelector);
  initCounters(options.counterSelector);

  if (options.pinSection) {
    initScrollPin(options.pinSection, options.pinConfig);
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initCreativeAgency({
      pinSection: "#ca-process",
    });
  });
}
