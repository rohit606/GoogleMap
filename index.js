// Initialize and add the map
let map;

async function initMap() {

  const position = { lat: 24.571270, lng: 73.691544 };


  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

 
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
    title:"Udaipur",


  });


  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Udaipur",
  
  });
}

initMap();