var map = L.map('map').setView([4.546937547209126, -74.10100564622068], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Lista de puntos de interés
var puntos = [
    [4.546990526969557, -74.10081849052838],
    [4.546658252122265, -74.10106409757974],
    [4.546849031957634, -74.10103857996401],
    [4.546462157548294, -74.10187524274691],
    [4.5461626953495555, -74.10196643785117]
];

// Agregar marcadores al mapa
puntos.forEach(function(coordenadas, index) {
    L.marker(coordenadas).addTo(map)
        .bindPopup("Punto de Interés " + (index + 1));
});