(function() {
  // Fade in on load
  document.documentElement.classList.add('page-loading');
  window.addEventListener('load', function() {
    requestAnimationFrame(function() {
      document.documentElement.classList.remove('page-loading');
      document.documentElement.classList.add('page-loaded');
    });
  });

  // Intercept internal nav clicks for fade-out
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') && !href.includes(location.hostname)) return;
    if (link.target === '_blank') return;
    e.preventDefault();
    document.documentElement.classList.add('page-leaving');
    setTimeout(function() {
      window.location.href = href;
    }, 280);
  });
})();
