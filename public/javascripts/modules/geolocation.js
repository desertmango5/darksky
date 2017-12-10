// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

function getGeolocation() {
  const output = document.getElementById('out');
  const notSupported = '<p>Geolocation is not supported by your browser.</p>';
  const cannotRetrieve = '<p>Unable to retrieve your location.</p>';

  if (!navigator.geolocation) {
    output.innerHTML = notSupported;
    return;
  }

  const success = (position) => {
    const location = position.coords;
    const [lat, long] = [location.latitude, location.longitude];
    console.log(`Lat: ${lat}, Long: ${long}`);
  };

  const error = () => {
    output.innerHTML = cannotRetrieve;
  };

  output.innerHTML = '<p>Retrieving your location...</p>';

  // TODO make the retrieving message prettier

  navigator.geolocation.getCurrentPosition(success, error);
}

export default getGeolocation;
