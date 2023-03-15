var map = L.map('map').setView([47.6043,-122.3221], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
        var marker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
}

map.on('click', onMapClick);
// Pioneer Square
L.marker([47.60203,-122.33388]).addTo(map);
// Pikes Place Market
L.marker([47.60939,-122.34173]).addTo(map);
// Space Needle
L.marker([47.62053,-122.34931]).addTo(map);



