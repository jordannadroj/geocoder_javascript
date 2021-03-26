import mapboxgl from 'mapbox-gl';

const displayResult = (data) => {
  const long = data.features[0].center[0];
  // eslint-disable-next-line no-undef
  longitude.innerText = long;
  const lat = data.features[0].center[1];
  // eslint-disable-next-line no-undef
  latitude.innerText = lat;
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFubmFkcm9qIiwiYSI6ImNraXE5dmxsZjBia3kydGwzNW1rY2FvNjkifQ.UOlSBKHWw3lZKkkalJ_mGw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [long, lat],
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat([long, lat])
    .addTo(map);
};

const searchLocation = (query) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1Ijoiam9yZGFubmFkcm9qIiwiYSI6ImNraXE5dmxsZjBia3kydGwzNW1rY2FvNjkifQ.UOlSBKHWw3lZKkkalJ_mGw`)
    .then(response => response.json())
    .then(displayResult);
};

export { displayResult, searchLocation };
