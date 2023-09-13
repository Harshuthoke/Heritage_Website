// Initialize and add the map
function initMap() {
  // The location of Uluru
  const maharashtra= { lat: 20.00, lng: 76.00 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: maharashtra,
  });
  // The marker, positioned at Uluru;
}

window.initMap = initMap;