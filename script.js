// Raagendhu R — Instagram-themed portfolio interactions

document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const backdrop = document.getElementById('modal-backdrop');

  function closeAllModals() {
    document.querySelectorAll('.ig-modal.open').forEach((m) => m.classList.remove('open'));
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeAllStories() {
    document.querySelectorAll('.story-overlay.open').forEach((s) => {
      s.classList.remove('open');
      const bar = s.querySelector('.story-progress span');
      if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
    });
    document.body.style.overflow = '';
  }

  // Open post modals
  document.querySelectorAll('[data-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-modal');
      const modal = document.getElementById(id);
      if (!modal) return;
      closeAllModals();
      modal.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  backdrop.addEventListener('click', closeAllModals);
  document.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', closeAllModals));

  // Open story overlays
  document.querySelectorAll('[data-story]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-story');
      const story = document.getElementById(id);
      if (!story) return;
      closeAllStories();
      story.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelectorAll('[data-story-close]').forEach((btn) => {
    btn.addEventListener('click', closeAllStories);
  });

  document.querySelectorAll('.story-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllStories();
    });
  });

  // Escape key closes everything
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeAllStories();
    }
  });

  // ---------- Scroll-in polish (safe: content is never hidden) ----------
  // Only elements already below the fold get offset via `.pre-reveal`, and
  // only once we know an IntersectionObserver is watching them to bring
  // them back — so nothing is ever offset without something guaranteeing
  // it will settle back into place.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.numbers, .expertise, .annachy, .stories-section, .creator, .footer')
      .forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Only pre-offset sections not already visible on load.
        if (rect.top > window.innerHeight * 0.85) {
          section.classList.add('pre-reveal');
        }
        io.observe(section);
      });
  }
});
