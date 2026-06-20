// ---------- theme: respect saved choice, fall back to system ----------
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
  }

  const btn = document.querySelector('.theme-btn');
  if (btn) {
    const sync = () => btn.setAttribute('aria-pressed', String(document.body.classList.contains('dark')));
    sync();
    btn.addEventListener('click', () => {
      const dark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      sync();
    });
  }
})();

// ---------- active section highlighting in the table of contents ----------
(function () {
  const links = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  if (!links.length) return;

  const map = new Map();
  links.forEach((link) => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target) map.set(target, link);
  });
  if (!map.size) return;

  let current = null;
  const setActive = (link) => {
    if (link === current) return;
    if (current) current.classList.remove('active');
    if (link) link.classList.add('active');
    current = link;
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length) setActive(map.get(visible[0].target));
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  map.forEach((_, section) => observer.observe(section));
})();

// ---------- share: native share sheet, else copy link ----------
(function () {
  const btn = document.querySelector('.share');
  if (!btn) return;
  const label = btn.querySelector('.share-text');
  const original = label ? label.textContent : '';

  btn.addEventListener('click', async () => {
    const url = window.location.href;
    const title = document.title;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      if (label) {
        label.textContent = 'Link copied';
        setTimeout(() => { label.textContent = original; }, 1800);
      }
    } catch (_) { /* user dismissed the share sheet — ignore */ }
  });
})();
