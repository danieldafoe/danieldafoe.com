export function setLocalStorage(key, value) {
  if (key && value) {
    window.localStorage.setItem(key, value);
  }
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}
