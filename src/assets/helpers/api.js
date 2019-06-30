const AUTH_SERVICES_API = process.env.REACT_APP_AUTH_SERVICES;
export const sendFormData = (url, data) => {
  const API_URL = AUTH_SERVICES_API + url;
  return new Promise((resolve, reject) => {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => resolve(data));
        } else {
          reject('Invalid username or password');
        }
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

export const getAuthStatus = loginToken => {
  return new Promise((resolve, reject) => {
    if (!loginToken) {
      reject();
    }
    fetch(`${AUTH_SERVICES_API}/authenticate`, {
      headers: new Headers({
        'x-auth': loginToken
      })
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(() => reject());
  });
};
