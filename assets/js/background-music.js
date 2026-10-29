/* Local user-supplied recording. No streaming embed or duplicate audio instances. */
(() => {
  if (window.rt06BackgroundMusic) return;
  const audio = new Audio('public/audio/karedok-leunca.mp3');
  window.rt06BackgroundMusic = audio;
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0;
  const toggle = document.getElementById('music-toggle');
  let enabled = true;
  try { enabled = localStorage.getItem('rt06-music-enabled') !== 'false'; } catch (_) {}
  function updateToggle() {
    if (!toggle) return;
    toggle.hidden = false;
    toggle.setAttribute('aria-pressed', String(enabled));
    const label = enabled ? 'Nonaktifkan musik' : 'Aktifkan musik';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    toggle.querySelector('i').className = enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
  }
  updateToggle();
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
      audio.volume = 0.35 * progress;
      if (progress < 1 && !audio.paused) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  }
  async function start(event) {
    if (!enabled || !delayElapsed || event?.target?.closest?.('#music-toggle')) return;
    if (event?.type === 'pointerdown' && event.pointerType !== 'mouse') return;
    if (event?.type === 'keydown' && (event.repeat || event.ctrlKey || event.metaKey || event.altKey)) return;
    if (pending || !audio.paused || document.hidden) return;
    pending = true;
    try {
      // Browsers decide whether audible autoplay is permitted; gestures retry failures.
      audio.volume = 0.001;
      await audio.play();
      if (!enabled) { audio.pause(); return; }
      fadeIn();
    } catch (_) {
      // Autoplay rejection or unavailable media must never break the website.
    } finally { pending = false; }
  }
  events.forEach(type => document.addEventListener(type, start, { passive: true, capture: true }));
  toggle?.addEventListener('click', () => {
    enabled = !enabled;
    try { localStorage.setItem('rt06-music-enabled', String(enabled)); } catch (_) {}
    updateToggle();
    if (!enabled) {
      cancelAnimationFrame(frame);
      audio.pause();
      audio.volume = 0;
    } else {
      delayElapsed = true;
      clearTimeout(autoplayTimer);
      start();
    }
  });
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
