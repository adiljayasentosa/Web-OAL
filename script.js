const SITE_CONFIG = { whatsappNumber: '62895355289983', price: 'Rp79.000' };
const message = `Halo, saya ingin membeli Organization Admin Lite seharga ${SITE_CONFIG.price}.`;
const links = document.querySelectorAll('[data-wa]');
links.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  if (SITE_CONFIG.whatsappNumber.includes('X')) {
    alert('Nomor WhatsApp belum dikonfigurasi. Buka script.js lalu ganti whatsappNumber dengan nomor WhatsApp tujuan, tanpa tanda + atau spasi.');
    return;
  }
  window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}));


const screenshotWindow = document.querySelector('.screenshot-window');
const screenshotTrack = document.querySelector('.screenshot-track');
if (screenshotWindow && screenshotTrack) {
  let touchTimer;
  screenshotWindow.addEventListener('touchstart', () => {
    screenshotTrack.style.animationPlayState = 'paused';
    clearTimeout(touchTimer);
  }, { passive: true });
  screenshotWindow.addEventListener('touchend', () => {
    clearTimeout(touchTimer);
    touchTimer = setTimeout(() => { screenshotTrack.style.animationPlayState = ''; }, 900);
  }, { passive: true });
}
