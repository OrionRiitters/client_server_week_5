let url = 'https://api.wheretheiss.at/v1/satellites/25544';

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');

let issIcon = L.icon({
  iconUrl: 'iss.png',
  iconSize:     [35, 30],
  iconAnchor:   [10, 10],
  popupAnchor:  [0, -7]
});

let issMarker;
let update = 10000;

let map = L.map('iss-map').setView([0, 0], 2);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 7,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoibm9pcm9yaW9uIiwiYSI6ImNqczVhc3U0NzBkdGEzeXBicHlkZ24zNnEifQ.HvhsssPH_dHgAciNbU40tA'
}).addTo(map);

let max_failed_attempts = 3;
fetchISSData(max_failed_attempts);

function fetchISSData(attempts) {
  fetch(url)
    .then( res => res.json() )
    .then( issData => {
      let lat = issData.latitude;
      let long = issData.longitude;
      issLat.innerHTML = lat;
      issLong.innerHTML = long;

      if (!issMarker) {
        issMarker = L.marker([lat, long]).addTo(map);
      } else {
        issMarker.setLatLng([lat, long]);
      }
    })
    .catch( err => {
      attempts--;
      console.log(err);
    });
  setTimeout(fetchISSData, update, attempts);
}
