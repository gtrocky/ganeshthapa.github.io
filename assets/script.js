
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const path = location.pathname.split('/').pop() || 'index.html';
  const link = document.querySelector(`nav.site a[href="${path}"]`);
  if (link && !document.querySelector('nav.site a.active')) link.classList.add('active');
});
