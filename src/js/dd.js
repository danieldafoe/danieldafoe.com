document.addEventListener('DOMContentLoaded', initPage);
const themeToggle = document.querySelector('.js-theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

function initPage() {
  const theme = getThemeFromLocalStorage();
  setTheme(theme);
}

function toggleTheme(event) {
  event.preventDefault();

  const bodyClasses = document.body.classList;

  if (bodyClasses.contains(THEMES.DARK)) {
    bodyClasses.remove('dark');
    setThemeInLocalStorage('light');
    // Change button text
    themeToggle.innerText = '🌙 Use dark theme';
  } else {
    bodyClasses.add('dark');
    setThemeInLocalStorage('dark');
    // Change button text
    themeToggle.innerText = '☀️ Use light theme';
  }
}

function getThemeFromLocalStorage() {
  const localStorage = window.localStorage;

  if (localStorage) {
    const themeChoice = localStorage.getItem('theme');

    if (themeChoice && themeChoice === THEMES.DARK) {
      return 'dark';
    }
    return 'light';
  }
  return 'light';
}

function setThemeInLocalStorage(theme) {
  const localStorage = window.localStorage;

  if (localStorage) {
    localStorage.setItem('theme', theme);
  }
}

function setTheme(theme) {
  const bodyClasses = document.body.classList;

  if (theme === THEMES.DARK) {
    bodyClasses.add('dark');
    setThemeInLocalStorage('dark');
    // Change button text
    themeToggle.innerText = '☀️ Use light theme';
  } else {
    bodyClasses.remove('dark');
    setThemeInLocalStorage('light');
    // Change button text
    themeToggle.innerText = '🌙 Use dark theme';
  }

  // if (bodyClasses.contains('dark')) {
  //   bodyClasses.remove('dark');
  //   setThemeInLocalStorage('light');
  //   // Change button text
  //   themeToggle.innerText = 'Turn on dark mode';
  // } else {
  //   bodyClasses.add('dark');
  //   setThemeInLocalStorage('dark');
  //   // Change button text
  //   themeToggle.innerText = 'Turn on light mode';
  // }
}