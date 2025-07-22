map = L.map('map')
map.setView([14.630604, -90.606588], 16.50);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const userMarker = L.marker([14.630604, -90.606588]).addTo(map);
userMarker.bindPopup("<img src='./asserts/localStorage.png' alt='logo' style='width:5rem;' /> <br/> is here!"
);

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const userlat = position.coords.latitude;s
      const userlng = position.coords.longitude;

      userMarker.setLatLng([userlat, userlng]);
      map.setView([userlat, userlng], 15);
    },
    (error) => {
      console.error(`geolocation error: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    }

  );
} else {
  console.error("Geolocation is not supported by this browser.");
}