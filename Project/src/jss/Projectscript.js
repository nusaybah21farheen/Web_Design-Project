/* ---------- Utilities: cart in localStorage ---------- */
const CART_KEY = 'elan_cart';





  


/* ---------- Footer year ---------- */
function setYear() {
  const els = document.querySelectorAll('#year');
  els.forEach(el => el.textContent = new Date().getFullYear());
}

/* ---------- Init on load ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  updateCartCount();
  initProductButtons();
  renderCart();
  initContactForm();
  initCartButtons();
});