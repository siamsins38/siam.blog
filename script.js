// Typing animation
const text = "Welcome to Siam's Neon Blog";
let index = 0;

function type() {
    document.querySelector(".typing-text").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(type, 100);
}
type();

// Scroll Fade-up animation
const faders = document.querySelectorAll(".fade-up");

function showOnScroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Footer helpers
document.getElementById('copyright-year').textContent =
  new Date().getFullYear();

const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('subscribe-email').value.trim();
  if (!email) return alert('Please enter email.');
  alert('Thanks — ' + email + ' — subscribed (demo).');
  subscribeForm.reset();
});

const backToTop = document.getElementById('backToTop');
function checkScrollForButton() {
  if (window.scrollY > 300) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
}
window.addEventListener('scroll', checkScrollForButton);
checkScrollForButton();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('year').textContent = new Date().getFullYear();