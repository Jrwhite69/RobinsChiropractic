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
