// Load dark mode preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function triggerAnimation() {
  const box = document.getElementById('animatedBox');
  box.classList.add('animate');

  setTimeout(() => {
    box.classList.remove('animate');
  }, 1000); // Reset animation after 1 second
}
