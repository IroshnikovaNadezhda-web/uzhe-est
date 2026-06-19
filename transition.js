// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('app') || document.body.querySelector('.essay-wrap') || document.body.querySelector('.wrap');
  
  document.querySelectorAll('.nav-center a, .logo').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      e.preventDefault();
      document.documentElement.style.transition = 'opacity 0.32s ease';
      document.documentElement.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 320);
    });
  });
});
