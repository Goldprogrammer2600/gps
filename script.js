// Schakel Donkere Modus in/uit
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Willekeurige Citaten
const quotes = [
  'De reis van duizend mijl begint met één stap.',
  'Niet allen die dwalen zijn verloren.',
  'Het leven is kort en de wereld is wijd.',
  'Reis ver, reis vaak.',
  'Avontuur wacht om de hoek.'
];
document.getElementById('quote').innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

// Initialiseer de kaart, gecentreerd op Rotterdam
const map = L.map('map').setView([51.9225, 4.47917], 13);

// Voeg OpenStreetMap tegel laag toe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Openbare plaatsen in Rotterdam met informatie
const markers = [
  {
    name: 'Rotterdam Centraal Station',
    lat: 51.9225,
    lon: 4.4691,
    info: 'Belangrijkste treinstation in Rotterdam.'
  },
  {
    name: 'Maritiem Museum',
    lat: 51.9170,
    lon: 4.4846,
    info: 'Museum dat de maritieme geschiedenis van Rotterdam toont.'
  },
  {
    name: 'Erasmusbrug',
    lat: 51.9090,
    lon: 4.4871,
    info: 'Iconische hangbrug over de Nieuwe Maas rivier.'
  },
  {
    name: 'Museum Boijmans Van Beuningen',
    lat: 51.9144,
    lon: 4.4736,
    info: 'Museum met een uitgebreide collectie kunst en design.'
  },
  {
    name: 'Euromast',
    lat: 51.9055,
    lon: 4.4669,
    info: 'Uitkijktoren met panoramisch uitzicht over Rotterdam.'
  },
  {
    name: 'Diergaarde Blijdorp (Zoo)',
    lat: 51.9274,
    lon: 4.4494,
    info: 'Een van de oudste en meest populaire dierentuinen in Nederland.'
  },
  {
    name: 'Markthal',
    lat: 51.9206,
    lon: 4.4860,
    info: 'Unieke overdekte markthal met appartementen erboven.'
  },
  {
    name: 'Kubuswoningen',
    lat: 51.9208,
    lon: 4.4880,
    info: 'Set van innovatieve kubusvormige huizen ontworpen door architect Piet Blom.'
  },
  {
    name: 'Kunsthal',
    lat: 51.9146,
    lon: 4.4729,
    info: 'Expositieruimte voor hedendaagse kunst, fotografie en design tentoonstellingen.'
  },
  {
    name: 'Witte de Withstraat',
    lat: 51.9141,
    lon: 4.4782,
    info: 'Levendige straat bekend om zijn culturele instellingen, bars en restaurants.'
  },
  {
    name: 'Oceanium Rotterdam Zoo',
    lat: 51.9271,
    lon: 4.4490,
    info: 'Groot oceaanarium binnen de Rotterdamse dierentuin, met zeedieren exposities.'
  },
  {
    name: 'SS Rotterdam',
    lat: 51.9032,
    lon: 4.4825,
    info: 'Historisch schip en hotel permanent aangemeerd in Rotterdam.'
  },
  {
    name: 'Fenix Food Factory',
    lat: 51.9052,
    lon: 4.4866,
    info: 'Foodhal en markt met een verscheidenheid aan lokale en ambachtelijke producten.'
  },
  {
    name: 'Laurenskerk',
    lat: 51.9220,
    lon: 4.4842,
    info: 'Gotische kerk uit de middeleeuwen, gelegen in het stadscentrum.'
  }
];

// Voeg markers toe aan de kaart met informatieve pop-ups
markers.forEach(marker => {
  const popupContent = `<b>${marker.name}</b><br>${marker.info}<br><button onclick="getRouteTo(${marker.lat}, ${marker.lon})">Routebeschrijving</button>`;
  const customOptions = {
    className: 'custom-popup',
    maxWidth: 300
  };
  
  const markerObj = L.marker([marker.lat, marker.lon]).addTo(map)
    .bindPopup(popupContent, customOptions);
});

// Geolocatie
const geolocateButton = document.getElementById('geolocate');
geolocateButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      map.setView([lat, lon], 13);
    });
  } else {
    alert('Geolocatie wordt niet ondersteund door deze browser.');
  }
});

// Functie om route naar een locatie te krijgen
function getRouteTo(lat, lon) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const startLat = position.coords.latitude;
      const startLon = position.coords.longitude;

      // Gebruik OpenRouteService API voor routeplanning
      fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62489cff1f05d5e641028fdc7917f3fdb21b&start=${startLon},${startLat}&end=${lon},${lat}`)
        .then(response => response.json())
        .then(data => {
          const coordinates = data.features[0].geometry.coordinates;
          const route = coordinates.map(coord => [coord[1], coord[0]]);
          
          L.polyline(route, { color: 'blue' }).addTo(map);
          map.fitBounds(L.polyline(route).getBounds());
        })
        .catch(err => {
          console.error('Fout bij ophalen van route:', err);
        });
    });
  } else {
    alert('Geolocatie wordt niet ondersteund door deze browser.');
  }
}
