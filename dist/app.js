const root = document.documentElement;
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let pending = false;
function updateAmbient() {
  pending = false;
  if (motion.matches) { root.style.setProperty('--progress', '0'); return; }
  const distance = root.scrollHeight - innerHeight;
  root.style.setProperty('--progress', String(distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0));
}
function requestUpdate() { if (!pending) { pending = true; requestAnimationFrame(updateAmbient); } }
addEventListener('scroll', requestUpdate, { passive: true });
addEventListener('resize', requestUpdate);
motion.addEventListener('change', requestUpdate);
new ResizeObserver(requestUpdate).observe(document.body);
document.getElementById('year').textContent = new Date().getFullYear();
updateAmbient();

// Native horizontal scrolling keeps touch, trackpad and keyboard navigation available.
const track = document.querySelector('.review-stack');
const cards = [...track.querySelectorAll('.review-card')];
const previous = document.getElementById('review-prev');
const next = document.getElementById('review-next');
const status = document.getElementById('review-status');
let current = 0;
let reviewFrame = 0;
cards.forEach((card, index) => {
  card.setAttribute('role', 'group');
  card.setAttribute('aria-roledescription', 'slide');
  card.setAttribute('aria-label', `${index + 1} of ${cards.length}`);
});
function updateReviews() {
  reviewFrame = 0;
  const viewport = track.getBoundingClientRect();
  const center = viewport.left + viewport.width / 2;
  let nearest = Infinity;
  cards.forEach((card, index) => {
    const bounds = card.getBoundingClientRect();
    const distance = Math.abs(bounds.left + bounds.width / 2 - center);
    card.style.setProperty('--focus', Math.max(0, 1 - distance / (card.offsetWidth * .8)).toFixed(3));
    if (distance < nearest) { nearest = distance; current = index; }
  });
  previous.disabled = current === 0;
  next.disabled = current === cards.length - 1;
  const label = `${current + 1} of ${cards.length}`;
  if (status.textContent !== label) status.textContent = label;
}
function scheduleReviews() { if (!reviewFrame) reviewFrame = requestAnimationFrame(updateReviews); }
function goToReview(index) {
  const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
  const viewport = track.getBoundingClientRect();
  const bounds = card.getBoundingClientRect();
  track.scrollBy({ left: bounds.left + bounds.width / 2 - viewport.left - viewport.width / 2, behavior: motion.matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => goToReview(current - 1));
next.addEventListener('click', () => goToReview(current + 1));
track.addEventListener('scroll', scheduleReviews, { passive: true });
track.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  goToReview(event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : current + (event.key === 'ArrowRight' ? 1 : -1));
});
new ResizeObserver(scheduleReviews).observe(track);
updateReviews();
