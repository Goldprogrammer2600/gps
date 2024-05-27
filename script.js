mapboxgl.accessToken =
"pk.eyJ1IjoibmlnZWwwMjI2IiwiYSI6ImNsd29saXF6NDJqNDkycW1teWthdXQ1aWsifQ.OkxTYxbSqrAydmPVFNhpwg";
const map = new mapboxgl.Map({
container: "map",
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: "mapbox://styles/mapbox/streets-v12",
center: [4.474684, 51.923424],
zoom: 11.15,
});

map.on("load", () => {
map.addSource("places", {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "<strong>Feyenoord Station</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.523263, 51.893829],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Kunsthal Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.47327, 51.91062],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Dierentuin Blijdorp Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.449028, 51.927253],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Wereld Museum Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.480523, 51.907852],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Erasmus Universiteit Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.525856, 51.917525],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>SS Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.473415, 51.89759],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Rotterdam Centraal</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.469226, 51.925063],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Grafisch Lyceum Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.47795, 51.927795],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "<strong>Stadhuis Rotterdam</p>",
        },
        geometry: {
          type: "Point",
          coordinates: [4.479265, 51.922728],
        },
      },
    ],
  },
});
// Add a layer showing the places.
map.addLayer({
  id: "places",
  type: "circle",
  source: "places",
  paint: {
    "circle-color": "#4264fb",
    "circle-radius": 6,
    "circle-stroke-width": 2,
    "circle-stroke-color": "#ffffff",
  },
});

// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
});

map.on("mouseenter", "places", (e) => {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = "pointer";

  // Copy coordinates array.
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.description;

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  // Populate the popup and set its coordinates
  // based on the feature found.
  popup.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on("mouseleave", "places", () => {
  map.getCanvas().style.cursor = "";
  popup.remove();
});

map.on("touchend", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});