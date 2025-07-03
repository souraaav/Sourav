// theme-toggle.js
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('toggle-theme');

  // Detect & apply saved theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = "🌙 Dark Mode";
  } else {
    document.body.classList.remove('dark-mode');
    btn.textContent = "☀️ Light Mode";
  }

  btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});