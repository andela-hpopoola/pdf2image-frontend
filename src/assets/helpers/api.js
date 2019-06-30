export const sendFormData = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          resolve();
        } else {
          reject('Invalid username or password');
        }
      })
      .catch(error => {
        reject(error.message);
      });
  });
};
