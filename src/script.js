/* ----- COUNTDOWN ----- */
(function () {
  const TARGET = new Date('2026-07-21T18:30:00');

  const el = {
    days:  document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    min:   document.getElementById('cd-min'),
    sec:   document.getElementById('cd-sec'),
  };

  let prevSec = -1;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now  = new Date();
    const diff = TARGET - now;

    if (diff <= 0) {
      Object.values(el).forEach(e => e.textContent = '00');
      return;
    }

    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff % 864e5) / 36e5);
    const m = Math.floor((diff % 36e5)  / 6e4);
    const s = Math.floor((diff % 6e4)   / 1e3);

    el.days.textContent  = pad(d);
    el.hours.textContent = pad(h);
    el.min.textContent   = pad(m);
    el.sec.textContent   = pad(s);

    if (s !== prevSec) {
      prevSec = s;
      el.sec.classList.remove('tick');
      void el.sec.offsetWidth;
      el.sec.classList.add('tick');

      if (s === 0) {
        el.min.classList.remove('tick');
        void el.min.offsetWidth;
        el.min.classList.add('tick');
      }
    }
  }

  tick();
  setInterval(tick, 1000);
})();

/* ----- VIDEO OVERLAY ----- */
(function () {
  const video   = document.getElementById('main-video');
  const overlay = document.getElementById('video-overlay');

  if (!video || !overlay) return;

  video.addEventListener('play', () => overlay.classList.add('hidden'));
  video.addEventListener('pause', () => {
    if (video.currentTime === 0) overlay.classList.remove('hidden');
  });
  video.addEventListener('ended', () => overlay.classList.remove('hidden'));
})();
