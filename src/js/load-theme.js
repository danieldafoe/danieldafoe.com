// Get theme from LocalStorage to see if it's dark
if (window.localStorage) {
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
}