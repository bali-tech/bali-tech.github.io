document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Function to set the theme
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  // Determine initial theme
  if (currentTheme) {
    applyTheme(currentTheme);
  } else if (prefersDark) {
    applyTheme('dark');
  }

  // Handle theme toggle click
  themeToggle.addEventListener('click', () => {
    let newTheme = 'light';
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
      newTheme = 'dark';
    }
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
});
