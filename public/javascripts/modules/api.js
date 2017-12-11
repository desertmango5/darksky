const api = () => {
  const lat = 25;
  const long = 50;
  const xhr = new XMLHttpRequest();

  xhr.open('POST', `http://localhost:8888/${lat}/${long}`);
  xhr.setRequestHeader('Content-Type', 'multipart');
  xhr.onload = () => {
    if (xhr.status === 200 && xhr.responseText !== lat) {
      console.log(`💩 💩 💩  lat was '${lat}' but is now '${xhr.responseText}'`);
    } else if (xhr.status !== 200) {
      console.log(`Request failed.  Returned status of ${xhr.status}`);
    }
  };
  xhr.send(encodeURI(`lat=${lat}&long=${long}`));
};

export default api;

