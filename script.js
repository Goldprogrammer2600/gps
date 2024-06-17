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
    info: 'Belangrijkste treinstation in Rotterdam.',
    category: 'historical'
    },
    {
    name: 'Maritiem Museum',
    lat: 51.9170,
    lon: 4.4846,
    info: 'Museum dat de maritieme geschiedenis van Rotterdam toont.',
    category: 'museum'
    },
    {
    name: 'Erasmusbrug',
    lat: 51.9090,
    lon: 4.4871,
    info: 'Iconische hangbrug over de Nieuwe Maas rivier.',
    category: 'historical'
    },
    {
    name: 'Museum Boijmans Van Beuningen',
    lat: 51.9144,
    lon: 4.4736,
    info: 'Museum met een uitgebreide collectie kunst en design.',
    category: 'museum'
    },
    {
    name: 'Euromast',
    lat: 51.9055,
    lon: 4.4669,
    info: 'Uitkijktoren met panoramisch uitzicht over Rotterdam.',
    category: 'viewpoint'
    },
    {
    name: 'Diergaarde Blijdorp (Zoo)',
    lat: 51.9274,
    lon: 4.4494,
    info: 'Een van de oudste en meest populaire dierentuinen in Nederland.',
    category: 'entertainment'
    },
    {
    name: 'Markthal',
    lat: 51.9206,
    lon: 4.4860,
    info: 'Unieke overdekte markthal met appartementen erboven.',
    category: 'food'
    },
    {
    name: 'Kubuswoningen',
    lat: 51.9208,
    lon: 4.4880,
    info: 'Set van innovatieve kubusvormige huizen ontworpen door architect Piet Blom.',
    category: 'historical'
    },
    {
    name: 'Kunsthal',
    lat: 51.9146,
    lon: 4.4729,
    info: 'Expositieruimte voor hedendaagse kunst, fotografie en design tentoonstellingen.',
    category: 'museum'
    },
    {
    name: 'Witte de Withstraat',
    lat: 51.9141,
    lon: 4.4782,
    info: 'Levendige straat bekend om zijn culturele instellingen, bars en restaurants.',
    category: 'entertainment'
    },
    {
    name: 'Oceanium Rotterdam Zoo',
    lat: 51.9271,
    lon: 4.4490,
    info: 'Groot oceaanarium binnen de Rotterdamse dierentuin, met zeedieren exposities.',
    category: 'entertainment'
    },
    {
    name: 'SS Rotterdam',
    lat: 51.9032,
    lon: 4.4825,
    info: 'Historisch schip en hotel permanent aangemeerd in Rotterdam.',
    category: 'historical'
    },
    {
    name: 'Fenix Food Factory',
    lat: 51.9052,
    lon: 4.4866,
    info: 'Foodhal en markt met een verscheidenheid aan lokale en ambachtelijke producten.',
    category: 'food'
    },
    {
    name: 'Laurenskerk',
    lat: 51.9220,
    lon: 4.4842,
    info: 'Gotische kerk uit de middeleeuwen, gelegen in het stadscentrum.',
    category: 'historical'
    },
    {
    name: 'Rijksmuseum',
    lat: 52.3599,
    lon: 4.8852,
    info: 'Nationaal museum van Nederland, gelegen in Amsterdam.',
    category: 'museum'
    },
    {
    name: 'Anne Frank Huis',
    lat: 52.3752,
    lon: 4.8831,
    info: 'Historisch museum gewijd aan het leven van Anne Frank, gelegen in Amsterdam.',
    category: 'historical'
    },
    {
    name: 'Van Gogh Museum',
    lat: 52.3584,
    lon: 4.8811,
    info: 'Museum met de grootste collectie werken van Vincent van Gogh, gelegen in Amsterdam.',
    category: 'museum'
    },
    {
    name: 'Efteling',
    lat: 51.6503,
    lon: 5.0434,
    info: 'Grootste pretpark van Nederland, gelegen in Kaatsheuvel.',
    category: 'entertainment'
    },
    {
    name: 'Keukenhof',
    lat: 52.2709,
    lon: 4.5485,
    info: 'Beroemde bloementuin met jaarlijks een grote bloemenexpositie, gelegen in Lisse.',
    category: 'entertainment'
    },
    {
    name: 'Euromast',
    lat: 51.9055,
    lon: 4.4669,
    info: 'Uitkijktoren met panoramisch uitzicht over Rotterdam.',
    category: 'viewpoint'
    },
    {
    name: 'Scheveningen Strand',
    lat: 52.1101,
    lon: 4.2777,
    info: 'Populair strand in Den Haag, bekend om zijn pier en boulevard.',
    category: 'entertainment'
    },
    {
    name: 'Zaanse Schans',
    lat: 52.4735,
    lon: 4.8207,
    info: 'Historisch dorp met goed bewaarde windmolens en huizen, gelegen in Zaandam.',
    category: 'historical'
    },
    {
    name: 'Madurodam',
    lat: 52.1004,
    lon: 4.2949,
    info: 'Miniatuurpark met replicas van Nederlandse gebouwen en monumenten, gelegen in Den Haag.',
    category: 'entertainment'
    },
    {
    name: 'Cafe Hoppe',
    lat: 52.3682,
    lon: 4.8908,
    info: 'Historisch café in het centrum van Amsterdam, bekend om zijn authentieke sfeer.',
    category: 'food'
    },
    {
    name: 'Kinderdijk',
    lat: 51.8839,
    lon: 4.6336,
    info: 'Werelderfgoedlocatie met 19 windmolens uit de 18e eeuw, gelegen nabij Rotterdam.',
    category: 'historical'
    },
    {
    name: 'Dolfinarium Harderwijk',
    lat: 52.3441,
    lon: 5.6211,
    info: 'Grootste zeezoogdierenpark van Europa, gelegen in Harderwijk.',
    category: 'entertainment'
    },
    {
    name: 'Museum Speelklok',
    lat: 52.0909,
    lon: 5.1204,
    info: 'Museum gewijd aan zelfspelende muziekinstrumenten, gelegen in Utrecht.',
    category: 'museum'
    },
    {
    name: 'Leidseplein',
    lat: 52.3641,
    lon: 4.8813,
    info: 'Levendig plein in het centrum van Amsterdam, bekend om zijn uitgaansgelegenheden.',
    category: 'entertainment'
    },
    {
    name: 'Paleis Het Loo',
    lat: 52.2402,
    lon: 5.9355,
    info: 'Voormalig koninklijk paleis met prachtige tuinen, gelegen in Apeldoorn.',
    category: 'historical'
    },
    {
    name: 'Apenheul',
    lat: 52.1673,
    lon: 5.9104,
    info: 'Apenpark waar apen vrij rondlopen, gelegen in Apeldoorn.',
    category: 'entertainment'
    },
    {
    name: 'Artis',
    lat: 52.3664,
    lon: 4.9175,
    info: 'Oudste dierentuin van Nederland, gelegen in Amsterdam.',
    category: 'entertainment'
    },
    {
    name: 'Ouwehands Dierenpark',
    lat: 51.9874,
    lon: 5.5631,
    info: 'Populaire dierentuin met reuzenpandas, gelegen in Rhenen.',
    category: 'entertainment'
    },
    {
    name: 'NEMO Science Museum',
    lat: 52.3747,
    lon: 4.9122,
    info: 'Interactief museum over wetenschap en technologie, gelegen in Amsterdam.',
    category: 'museum'
    },
    {
    name: 'Nationaal Park De Hoge Veluwe',
    lat: 52.0883,
    lon: 5.8430,
    info: 'Groot nationaal park met diverse landschappen en het Kröller-Müller Museum, gelegen in Otterlo.',
    category: 'viewpoint'
    },
    {
    name: 'Van Abbemuseum',
    lat: 51.4398,
    lon: 5.4781,
    info: 'Museum voor moderne en hedendaagse kunst, gelegen in Eindhoven.',
    category: 'museum'
    },
    {
    name: 'Het Spoorwegmuseum',
    lat: 52.0801,
    lon: 5.1437,
    info: 'Museum gewijd aan de geschiedenis van de Nederlandse spoorwegen, gelegen in Utrecht.',
    category: 'museum'
    },
    {
    name: 'Dierenpark Amersfoort',
    lat: 52.1533,
    lon: 5.3945,
    info: 'Dierentuin met een unieke wandelroute door de leeuwenvallei, gelegen in Amersfoort.',
    category: 'entertainment'
    },
    {
    name: 'Museum Voorlinden',
    lat: 52.1161,
    lon: 4.5723,
    info: 'Museum voor moderne en hedendaagse kunst, gelegen in Wassenaar.',
    category: 'museum'
    },
    {
    name: 'Nederlands Openluchtmuseum',
    lat: 52.0064,
    lon: 5.9034,
    info: 'Museum dat de geschiedenis en cultuur van Nederland laat zien via historische gebouwen en ambachten, gelegen in Arnhem.',
    category: 'historical'
    },
    {
    name: 'Mauritshuis',
    lat: 52.0805,
    lon: 4.3151,
    info: 'Museum met een uitstekende collectie Nederlandse schilderijen uit de Gouden Eeuw, gelegen in Den Haag.',
    category: 'museum'
    },
    {
    name: 'Koninklijk Paleis Amsterdam',
    lat: 52.3731,
    lon: 4.8916,
    info: 'Voormalig stadhuis en huidig koninklijk paleis, gelegen op de Dam in Amsterdam.',
    category: 'historical'
    },
    {
    name: 'Nederlands Scheepvaartmuseum',
    lat: 52.3685,
    lon: 4.9153,
    info: 'Museum gewijd aan de maritieme geschiedenis van Nederland, gelegen in Amsterdam.',
    category: 'museum'
    },
    {
    name: 'Safaripark Beekse Bergen',
    lat: 51.5200,
    lon: 5.1072,
    info: 'Groot safaripark waar je met de auto of te voet tussen de dieren kunt rijden, gelegen in Hilvarenbeek.',
    category: 'entertainment'
    }
];

// Voeg markers toe aan de kaart met informatieve pop-ups
const markerObjects = markers.map(marker => {
  const popupContent = `<b>${marker.name}</b><br>${marker.info}<br><button onclick="getRouteTo(${marker.lat}, ${marker.lon})">Routebeschrijving</button>`;
  const customOptions = {
    className: 'custom-popup',
    maxWidth: 300
  };
  
  return L.marker([marker.lat, marker.lon]).addTo(map)
    .bindPopup(popupContent, customOptions);
});

// Geolocatie
const geolocateButton = document.getElementById('geolocate');
geolocateButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    console.log("Geolocation supported");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Position obtained");
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      map.setView([lat, lon], 13);
    }, (error) => {
      console.error("Error getting position: ", error);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
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

// Zoekfunctie
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  markerObjects.forEach((markerObj, index) => {
    if (markers[index].name.toLowerCase().includes(query)) {
      map.addLayer(markerObj);
    } else {
      map.removeLayer(markerObj);
    }
  });
});

// Filteropties
const filterOptions = document.getElementById('filter-options');
filterOptions.addEventListener('change', () => {
  const category = filterOptions.value;
  markerObjects.forEach((markerObj, index) => {
    if (category === 'all' || markers[index].category === category) {
      map.addLayer(markerObj);
    } else {
      map.removeLayer(markerObj);
    }
  });
});