// Get theme from LocalStorage to see if it's dark
const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};
const localStorage = window.localStorage;

if (localStorage) {
  const themeChoice = localStorage.getItem('theme');

  if (themeChoice && themeChoice === THEMES.DARK) {
    document.body.classList.add('dark');
  }
}