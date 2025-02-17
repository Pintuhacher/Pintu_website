// Dark Mode Toggle
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon between 🌙 (dark mode) and 🌞 (light mode)
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = '🌞';
  } else {
    themeToggleButton.textContent = '🌙';
  }
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Floating Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});