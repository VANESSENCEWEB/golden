/**
 * Creative Agency — Scroll-driven laptop pin section
 * Elements with data-at="0.5" activate when scroll progress >= 0.5
 */
export function initScrollPin(sectionSelector, config = {}) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const {
    lidSelector = ".ca-laptop__lid",
    titleSelector = ".ca-pin-title",
    hintSelector = ".ca-pin-hint",
    stageSelector = "[data-at]",
    typeStageSelector = "[data-type-stage]",
    typeTargetSelector = "[data-type-target]",
    btnSelector = "[data-mini-btn]",
    typedText = "A brand that moves people.",
    highlightWord = "moves",
    typeSpeed = 38,
    lidOpenRatio = 0.45,
  } = config;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lid = section.querySelector(lidSelector);
  const title = section.querySelector(titleSelector);
  const hint = section.querySelector(hintSelector);
  const stages = [...section.querySelectorAll(stageSelector)];
  const typeStage = section.querySelector(typeStageSelector);
  const typeTarget = section.querySelector(typeTargetSelector);
  const miniBtn = section.querySelector(btnSelector);

  const chars = (() => {
    const out = [];
    const idx = typedText.indexOf(highlightWord);
    [...typedText].forEach((ch, i) =>
      out.push({ ch, bold: idx >= 0 && i >= idx && i < idx + highlightWord.length })
    );
    return out;
  })();

  let typeTimer = null;
  let typed = 0;
  let ticking = false;

  function renderTyped() {
    let html = "";
    let open = false;
    for (let i = 0; i < typed; i++) {
      const c = chars[i];
      if (c.bold && !open) {
        html += "<b>";
        open = true;
      }
      if (!c.bold && open) {
        html += "</b>";
        open = false;
      }
      html += c.ch;
    }
    if (open) html += "</b>";
    if (typeTarget) typeTarget.innerHTML = html;
  }

  function startTyping() {
    if (typeTimer || typed >= chars.length) return;
    typeTimer = setInterval(() => {
      typed++;
      renderTyped();
      if (typed >= chars.length) {
        clearInterval(typeTimer);
        typeTimer = null;
      }
    }, typeSpeed);
  }

  function resetTyping() {
    clearInterval(typeTimer);
    typeTimer = null;
    typed = 0;
    if (typeTarget) typeTarget.innerHTML = "";
  }

  function update() {
    const rect = section.getBoundingClientRect();
    const total = rect.height - innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / total));

    if (lid) {
      const lidProgress = Math.min(1, progress / lidOpenRatio);
      lid.style.transform = reduceMotion
        ? "rotateX(0deg)"
        : `rotateX(${-78 + 78 * lidProgress}deg)`;
    }

    for (const stage of stages) {
      stage.classList.toggle("is-on", reduceMotion || progress >= parseFloat(stage.dataset.at));
    }

    if (typeStage) {
      const typeOn = reduceMotion || progress >= parseFloat(typeStage.dataset.at);
      if (typeOn) {
        if (reduceMotion) {
          typed = chars.length;
          renderTyped();
        } else {
          startTyping();
        }
      } else if (typed > 0) {
        resetTyping();
      }
    }

    if (miniBtn) {
      miniBtn.classList.toggle("is-pressed", !reduceMotion && progress >= 0.94 && progress < 0.97);
    }

    if (title) title.classList.toggle("is-visible", progress > 0.9);
    if (hint) hint.classList.toggle("is-hidden", progress > 0.08);

    ticking = false;
  }

  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}
