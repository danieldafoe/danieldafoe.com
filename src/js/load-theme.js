// Get theme from LocalStorage to see if it's dark
if (window.localStorage) {
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
}