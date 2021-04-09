import { setLocalStorage, getLocalStorage } from './helpers';

const APP_CONSTANTS = {
  ACCEPTED_COOKIES: 'acceptedCookies',
  NETLIFY_API_BASE: 'https://api.netlify.com/api/v1',
  NETLIFY_APP_NAME: 'danieldafoe.com',
  NETLIFY_AUTH_TOKEN: 'LKHbNmOdpIeO08oD6AODvRz44FG83vpBnifFLXLIPF0',
};

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  if (acceptedCookiesBanner() === 'true') {
    hideCookiesBanner();
  } else {
    // Set handler
    const cookiesBtn = document.querySelector('aside button');
    cookiesBtn.addEventListener('click', hideCookiesBanner);
  }

  loadNetlifySubmissions();
}

function acceptedCookiesBanner() {
  return getLocalStorage(APP_CONSTANTS.ACCEPTED_COOKIES);
}

function hideCookiesBanner() {
  const banner = document.getElementsByTagName('aside');
  banner[0].classList.toggle('hide');
  setLocalStorage(APP_CONSTANTS.ACCEPTED_COOKIES, 'true');
}

function loadNetlifySubmissions() {
  const requestInfo = {
    headers: new Headers({
      'Authorization': `Bearer ${APP_CONSTANTS.NETLIFY_AUTH_TOKEN}`,
      'User-Agent': `${APP_CONSTANTS.NETLIFY_APP_NAME} (dannydafoe@gmail.com)`
    })
  };

  const request = new Request(`${APP_CONSTANTS.NETLIFY_API_BASE}/forms/guestbook/submissions`, requestInfo);
  fetch(request).then((submissions) => console.log());
}
