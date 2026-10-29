/* Local user-supplied recording. No streaming embed or duplicate audio instances. */
(() => {
  if (window.rt06BackgroundMusic) return;
  const audio = new Audio('public/audio/karedok-leunca.mp3');
  window.rt06BackgroundMusic = audio;
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0;
  let pending = false;
  let frame = 0;
  let autoplayTimer = 0;
  let delayElapsed = false;
  const events = ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown'];
  function fadeIn() {
    cancelAnimationFrame(frame);
    const started = performance.now();
    const step = now => {
      const progress = Math.min(1, (now - started) / 2000);
      audio.volume = 0.15 * progress;
      if (progress < 1 && !audio.paused) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  }
  async function start(event) {
    if (!delayElapsed) return;
    if (event?.type === 'pointerdown' && event.pointerType !== 'mouse') return;
    if (event?.type === 'keydown' && (event.repeat || event.ctrlKey || event.metaKey || event.altKey)) return;
    if (pending || !audio.paused || document.hidden) return;
    pending = true;
    try {
      // Browsers decide whether audible autoplay is permitted; gestures retry failures.
      audio.volume = 0.001;
      await audio.play();
      fadeIn();
    } catch (_) {
      // Autoplay rejection or unavailable media must never break the website.
    } finally { pending = false; }
  }
  events.forEach(type => document.addEventListener(type, start, { passive: true, capture: true }));
  function scheduleAutoplay() {
    clearTimeout(autoplayTimer);
    delayElapsed = false;
    autoplayTimer = setTimeout(() => {
      delayElapsed = true;
      start();
    }, 1500);
  }
  addEventListener('pagehide', () => { clearTimeout(autoplayTimer); cancelAnimationFrame(frame); audio.pause(); });
  addEventListener('pageshow', event => { if (event.persisted) scheduleAutoplay(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && delayElapsed) start(); });
  scheduleAutoplay();
})();
