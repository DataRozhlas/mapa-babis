const cary = [
  [[48.2083536, 16.3725042], [55.7504461, 37.6174942], 'cesta z Vídně do Moskvy'],
  [[50.0835494, 14.4341414], [55.7504461, 37.6174942], 'cesta z Prahy do Moskvy'],
  [[55.7504461, 37.6174942], [44.9521456, 34.1024858], 'cesta z Moskvy do Simferopolu'],
  [[50.4500336, 30.5241361], [48.2083536, 16.3725042], 'cesta z Kyjeva do Vídně'],
];

const body = [
  [[47.9102733, 33.3917703], 'Krivoj Rog, pobyt u přítelkyně Jelizavety v prosinci 2017'],
  [[46.2017558, 6.1466014], 'Ženeva, Babiš mladší tam dlouhodobě žije se svou matkou'],
  [[54.7101281, 20.5105836], 'Kaliningrad, návštěva s ošetřovatelem v květnu 2016'],
  [[48.1516986, 17.1093064], 'Bratislava, původní bydliště Beáty Babišové'],
  [[44.6054433, 33.5220842], 'Sevastopol - cílová destinace na Krymu'],
  [[44.4970714, 34.1586869], 'Jalta - místo pobytu Jelizavety'],
];

const map = L.map('babis');
const vsechno = L.featureGroup();

cary.forEach((row) => {
  const group = L.featureGroup([
    L.circleMarker(row[0], {
      color: '#3182bd',
      radius: 8,
      weight: 2,
    }),
    L.polyline([row[0], row[1]], { 
      color: '#3182bd',
      weight: 2,
    }),
    L.circleMarker(row[1], {
      color: '#3182b',
      radius: 8,
      weight: 2,
    }),
  ]).bindPopup(row[2]);
  vsechno.addLayer(group);
});

body.forEach((row) => {
  const group = L.featureGroup([
    L.circleMarker(row[0], {
      color: '#de2d26',
      radius: 8,
      weight: 2,
    }),
  ]).bindPopup(row[1]);
  vsechno.addLayer(group);
});
vsechno.addTo(map);

map.fitBounds(vsechno.getBounds());

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
