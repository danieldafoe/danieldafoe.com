const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};
const themeToggle = document.querySelector('.js-theme-toggle');

initPage();
themeToggle.addEventListener('click', toggleTheme);

function initPage() {
  const theme = getThemeFromLocalStorage();
  setTheme(theme);
}

function toggleTheme(event) {
  event.preventDefault();

  const bodyClasses = document.body.classList;

  if (bodyClasses.contains(THEMES.LIGHT)) {
    bodyClasses.remove('light');
    setThemeInLocalStorage('dark');

    // Change button text
    themeToggle.innerText = '☀️ Use light theme';
  } else {
    bodyClasses.add('light');
    setThemeInLocalStorage('light');

    // Change button text
    themeToggle.innerText = '🌙 Use dark theme';
  }
}

function getThemeFromLocalStorage() {
  const localStorage = window.localStorage;

  if (localStorage) {
    const themeChoice = localStorage.getItem('theme');

    if (themeChoice && themeChoice === THEMES.LIGHT) {
      return 'light';
    }
    return 'dark';
  }
  return 'dark';
}

function setThemeInLocalStorage(theme) {
  const localStorage = window.localStorage;

  if (localStorage) {
    localStorage.setItem('theme', theme);
  }
}

function setTheme(theme) {
  const bodyClasses = document.body.classList;

  if (theme === THEMES.LIGHT) {
    bodyClasses.add('light');
    setThemeInLocalStorage('light');
    // Change button text
    themeToggle.innerText = '🌙 Use dark theme';
  }
  else {
    bodyClasses.remove('light');
    setThemeInLocalStorage('dark');
    // Change button text
    themeToggle.innerText = '☀️ Use light theme';
  }
}