// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Initialize theme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  rootElement.setAttribute('data-theme', 'dark');
  themeToggleBtn.textContent = '☀️';
} else {
  rootElement.removeAttribute('data-theme');
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = rootElement.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    rootElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// Typing Effect for Hero Section
const typingElement = document.getElementById('typing-text');
const phrases = [
  'Frontend Web Development',
  'HTML, CSS & Modern JavaScript',
  'Desain Web Bersih & Responsif',
  'Belajar Konsisten Setiap Hari'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 85;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 1800; // jeda saat kalimat selesai diketik
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400; // jeda sebelum mengetik kata berikutnya
  }

  setTimeout(typeLoop, delay);
}

if (typingElement) {
  typeLoop();
}

// Contact Form Submit Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
  
  contactForm.reset();
});
