import './index.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const map = L.map('mapid', { zoomControl: false }).setView([58.5222, 31.2831], 15);

document.querySelector('.leaflet-control-attribution.leaflet-control').remove();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

function* getRoute1LatLng() {
  yield { lat: 58.52375, lng: 31.2697 };
  yield { lat: 58.52389, lng: 31.26899 };
  yield { lat: 58.52413, lng: 31.26786 };
  yield { lat: 58.52435, lng: 31.26677 };
  yield { lat: 58.52438, lng: 31.26662 };
  yield { lat: 58.52445, lng: 31.26631 };
  yield { lat: 58.52454, lng: 31.26587 };
  yield { lat: 58.52467, lng: 31.26526 };
  yield { lat: 58.52477, lng: 31.26474 };
  yield { lat: 58.5249, lng: 31.26405 };
  yield { lat: 58.52504, lng: 31.26338 };
  yield { lat: 58.52523, lng: 31.26252 };
  yield { lat: 58.52533, lng: 31.26193 };
  yield { lat: 58.52539, lng: 31.26152 };
  yield { lat: 58.52535, lng: 31.26121 };
  yield { lat: 58.52525, lng: 31.26096 };
  yield { lat: 58.52513, lng: 31.26086 };
  yield { lat: 58.52501, lng: 31.26074 };
  yield { lat: 58.52485, lng: 31.26063 };
  yield { lat: 58.52455, lng: 31.26041 };
  yield { lat: 58.5243, lng: 31.26031 };
  yield { lat: 58.52405, lng: 31.26044 };
  yield { lat: 58.52382, lng: 31.26141 };
  yield { lat: 58.52361, lng: 31.26226 };
  yield { lat: 58.52347, lng: 31.26298 };
  yield { lat: 58.52309, lng: 31.2647 };
  yield { lat: 58.52289, lng: 31.26573 };
  yield { lat: 58.5228, lng: 31.26616 };
  yield { lat: 58.52267, lng: 31.2668 };
  yield { lat: 58.52252, lng: 31.26758 };
  yield { lat: 58.52232, lng: 31.26849 };
  yield { lat: 58.52227, lng: 31.269 };
  yield { lat: 58.52237, lng: 31.26931 };
  yield { lat: 58.52269, lng: 31.26955 };
  yield { lat: 58.52303, lng: 31.26974 };
  yield { lat: 58.52337, lng: 31.27004 };
  yield { lat: 58.52362, lng: 31.27023 };
}

function* getRoute2LatLng() {
  yield { lat: 58.54851, lng: 31.29614 };
  yield { lat: 58.54847, lng: 31.29597 };
  yield { lat: 58.54854, lng: 31.29559 };
  yield { lat: 58.5484, lng: 31.29527 };
  yield { lat: 58.54816, lng: 31.29495 };
  yield { lat: 58.54841, lng: 31.29361 };
  yield { lat: 58.54858, lng: 31.29244 };
  yield { lat: 58.54873, lng: 31.29103 };
  yield { lat: 58.54884, lng: 31.28913 };
  yield { lat: 58.54892, lng: 31.28658 };
  yield { lat: 58.54891, lng: 31.28438 };
  yield { lat: 58.54902, lng: 31.28207 };
  yield { lat: 58.54914, lng: 31.2794 };
  yield { lat: 58.5492, lng: 31.27697 };
  yield { lat: 58.54944, lng: 31.27421 };
  yield { lat: 58.54954, lng: 31.27341 };
  yield { lat: 58.54962, lng: 31.27306 };
  yield { lat: 58.55014, lng: 31.27159 };
  yield { lat: 58.55047, lng: 31.27075 };
  yield { lat: 58.55098, lng: 31.26932 };
  yield { lat: 58.55128, lng: 31.26858 };
  yield { lat: 58.55153, lng: 31.26792 };
  yield { lat: 58.55221, lng: 31.26617 };
  yield { lat: 58.55208, lng: 31.26605 };
  yield { lat: 58.55204, lng: 31.26586 };
  yield { lat: 58.55193, lng: 31.26576 };
  yield { lat: 58.55193, lng: 31.26576 };
  yield { lat: 58.55193, lng: 31.26576 };
  yield { lat: 58.55204, lng: 31.26586 };
  yield { lat: 58.55208, lng: 31.26605 };
  yield { lat: 58.55221, lng: 31.26617 };
  yield { lat: 58.55153, lng: 31.26792 };
  yield { lat: 58.55128, lng: 31.26858 };
  yield { lat: 58.55098, lng: 31.26932 };
  yield { lat: 58.55047, lng: 31.27075 };
  yield { lat: 58.55014, lng: 31.27159 };
  yield { lat: 58.54962, lng: 31.27306 };
  yield { lat: 58.54954, lng: 31.27341 };
  yield { lat: 58.54944, lng: 31.27421 };
  yield { lat: 58.5492, lng: 31.27697 };
  yield { lat: 58.54914, lng: 31.2794 };
  yield { lat: 58.54902, lng: 31.28207 };
  yield { lat: 58.54891, lng: 31.28438 };
  yield { lat: 58.54892, lng: 31.28658 };
  yield { lat: 58.54884, lng: 31.28913 };
  yield { lat: 58.54873, lng: 31.29103 };
  yield { lat: 58.54858, lng: 31.29244 };
  yield { lat: 58.54841, lng: 31.29361 };
  yield { lat: 58.54816, lng: 31.29495 };
  yield { lat: 58.5484, lng: 31.29527 };
  yield { lat: 58.54854, lng: 31.29559 };
  yield { lat: 58.54847, lng: 31.29597 };
  yield { lat: 58.54851, lng: 31.29614 };
}

function* getRoute3LatLng() {
  yield { lat: 58.58011, lng: 31.29353 };
  yield { lat: 58.58051, lng: 31.29176 };
  yield { lat: 58.58122, lng: 31.29234 };
  yield { lat: 58.58183, lng: 31.29285 };
  yield { lat: 58.58237, lng: 31.29329 };
  yield { lat: 58.58272, lng: 31.29359 };
  yield { lat: 58.58334, lng: 31.29409 };
  yield { lat: 58.58401, lng: 31.29464 };
  yield { lat: 58.58443, lng: 31.29498 };
  yield { lat: 58.58474, lng: 31.29524 };
  yield { lat: 58.58459, lng: 31.29608 };
  yield { lat: 58.58442, lng: 31.29705 };
  yield { lat: 58.58429, lng: 31.29781 };
  yield { lat: 58.58412, lng: 31.29886 };
  yield { lat: 58.58392, lng: 31.30002 };
  yield { lat: 58.58373, lng: 31.30116 };
  yield { lat: 58.58353, lng: 31.30243 };
  yield { lat: 58.58337, lng: 31.30351 };
  yield { lat: 58.58321, lng: 31.30450 };
  yield { lat: 58.58308, lng: 31.30531 };
  yield { lat: 58.58292, lng: 31.30637 };
  yield { lat: 58.58277, lng: 31.30735 };
  yield { lat: 58.58263, lng: 31.30830 };
  yield { lat: 58.58242, lng: 31.30937 };
  yield { lat: 58.58231, lng: 31.30959 };
  yield { lat: 58.58216, lng: 31.30972 };
  yield { lat: 58.58169, lng: 31.30982 };
  yield { lat: 58.58158, lng: 31.30991 };
  yield { lat: 58.58145, lng: 31.30988 };
  yield { lat: 58.58062, lng: 31.30984 };
  yield { lat: 58.57976, lng: 31.30959 };
  yield { lat: 58.5797, lng: 31.31039 };
  yield { lat: 58.57964, lng: 31.31127 };
  yield { lat: 58.57941, lng: 31.31271 };
  yield { lat: 58.57929, lng: 31.31438 };
  yield { lat: 58.579, lng: 31.3144 };
  yield { lat: 58.57861, lng: 31.31443 };
  yield { lat: 58.57816, lng: 31.31447 };
  yield { lat: 58.57788, lng: 31.3145 };
  yield { lat: 58.57788, lng: 31.3145 };
  yield { lat: 58.57788, lng: 31.3145 };
  yield { lat: 58.57816, lng: 31.31447 };
  yield { lat: 58.57861, lng: 31.31443 };
  yield { lat: 58.579, lng: 31.3144 };
  yield { lat: 58.57929, lng: 31.31438 };
  yield { lat: 58.57941, lng: 31.31271 };
  yield { lat: 58.57964, lng: 31.31127 };
  yield { lat: 58.5797, lng: 31.31039 };
  yield { lat: 58.57976, lng: 31.30959 };
  yield { lat: 58.58062, lng: 31.30984 };
  yield { lat: 58.58145, lng: 31.30988 };
  yield { lat: 58.58158, lng: 31.30991 };
  yield { lat: 58.58169, lng: 31.30982 };
  yield { lat: 58.58216, lng: 31.30972 };
  yield { lat: 58.58231, lng: 31.30959 };
  yield { lat: 58.58242, lng: 31.30937 };
  yield { lat: 58.58263, lng: 31.30830 };
  yield { lat: 58.58277, lng: 31.30735 };
  yield { lat: 58.58292, lng: 31.30637 };
  yield { lat: 58.58308, lng: 31.30531 };
  yield { lat: 58.58321, lng: 31.30450 };
  yield { lat: 58.58337, lng: 31.30351 };
  yield { lat: 58.58353, lng: 31.30243 };
  yield { lat: 58.58373, lng: 31.30116 };
  yield { lat: 58.58392, lng: 31.30002 };
  yield { lat: 58.58412, lng: 31.29886 };
  yield { lat: 58.58429, lng: 31.29781 };
  yield { lat: 58.58442, lng: 31.29705 };
  yield { lat: 58.58459, lng: 31.29608 };
  yield { lat: 58.58474, lng: 31.29524 };
  yield { lat: 58.58443, lng: 31.29498 };
  yield { lat: 58.58401, lng: 31.29464 };
  yield { lat: 58.58334, lng: 31.29409 };
  yield { lat: 58.58272, lng: 31.29359 };
  yield { lat: 58.58237, lng: 31.29329 };
  yield { lat: 58.58183, lng: 31.29285 };
  yield { lat: 58.58122, lng: 31.29234 };
  yield { lat: 58.58051, lng: 31.29176 };
  yield { lat: 58.58011, lng: 31.29353 };
}

let route1latLng = getRoute1LatLng(),
    route2latLng = getRoute2LatLng(),
    route3latLng = getRoute3LatLng();

const polygons = [{
  id: 1,
  lat: 59.20184,
  lng: 33.40442,
  unloading: 25,
  src: '/polygon.png',
  name: 'Полигон ТБО ООО Сетново'
}, {
  id: 2,
  lat: 58.5985,
  lng: 31.3086,
  unloading: 445,
  src: '/polygon.png',
  name: 'Полигон малотоксичных отходов ПАО Акрон'
}, {
  id: 3,
  lat: 58.6423,
  lng: 30.2522,
  unloading: 58,
  src: '/polygon.png',
  name: 'Полигон складирования хозяйственно-бытовых отходов п. Батецкий Новгородской области'
}, {
  id: 4,
  lat: 58.84422,
  lng: 32.21863,
  unloading: 37,
  src: '/polygon.png',
  name: 'Полигон ТБО ООО Экосервис в Малой Вишере'
}, {
  id: 5,
  lat: 57.97098,
  lng: 31.39687,
  unloading: 10,
  src: '/polygon.png',
  name: 'Полигон ТБО Старорусского района'
}];

const vehicles = [{
  id: 1,
  lat: 58.52375,
  lng: 31.2697,
  unloading: 54,
  loading: 57,
  src: '/garbage-truck.png'
}, {
  id: 2,
  lat: 58.54851,
  lng: 31.29614,
  unloading: 37,
  loading: 37,
  src: '/garbage-truck.png'
}, {
  id: 3,
  lat: 58.58011,
  lng: 31.29353,
  unloading: 57,
  loading: 60,
  src: '/garbage-truck.png'
}];

const polygonIcon = L.icon({
  iconUrl: '/polygon.svg',
  iconSize: [56, 56],
  iconAnchor: [28, 28]
});

const carIcon = L.icon({
  iconUrl: '/garbage-truck.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

const polygonSection = document.getElementById('polygonSection');

polygons.forEach((polygon) => {
  const marker = L.marker([polygon.lat, polygon.lng], { icon: polygonIcon }).addTo(map);
  marker._id = polygon.id;
  marker._latlng = L.latLng(polygon.lat, polygon.lng);
  marker.bindPopup(`
    <article class="flex items-center gap-6 font-medium relative max-h-48 w-auto">
      <img src="${polygon.src}" alt="Полигон" class="h-60 h-60 self-end">
      <section class="space-y-6">
        <h1 class="text-2xl text-[#005693]">${polygon.name}</h1>
        <section class="flex gap-4 items-center whitespace-nowrap">
          <span class="text-4xl text-center text-white py-3 bg-[#00B2FF] rounded-lg w-16 h-16">${polygon.unloading}</span>
          <span class="text-black text-lg leading-none m-0">выгрузок<br>за сегодня</span>
        </section>
      </section>
    </article>
  `, { minWidth: 450,  maxWidth: 700 });

  const article = document.createElement('article');

  article.classList.add('space-y-4');
  article.innerHTML = `
    <h2 class="text-2xl font-light">${polygon.name}</h2>
    <section class="text-lg flex items-center justify-center gap-2">
      <span
          class="text-3xl font-bold bg-[#00B2FF] py-3.5 rounded-full w-16 h-16 text-center">${polygon.unloading}</span>
      <p>выгрузок</p>
    </section>
  `;

  polygonSection.insertAdjacentElement('beforeend', article);
});

const articleAllPolygons = document.createElement('article');
articleAllPolygons.classList.add('space-y-4');
articleAllPolygons.innerHTML = `
<h2 class="text-2xl font-light">Всего</h2>
<section class="text-lg flex items-center justify-center gap-2">
  <span
      class="text-3xl font-bold bg-[#00B2FF] py-3.5 rounded-full w-16 h-16 text-center">${polygons.reduce((acc, polygon) => acc += polygon.unloading, 0)}</span>
  <p>выгрузок</p>
</section>
`;
polygonSection.insertAdjacentElement('beforeend', articleAllPolygons);

vehicles.forEach((vehicle, index) => {
  const marker = L.marker([vehicle.lat, vehicle.lng], { icon: carIcon }).addTo(map);
  // const marker = L.marker([vehicle.lat, vehicle.lng]).addTo(map);
  marker._id = vehicle.id;
  marker._latlng = L.latLng(vehicle.lat, vehicle.lng);
  // marker.setIcon(L.divIcon({className: vehicle}));
  marker.bindPopup(`
    <article class="grid grid-cols-[1fr_1fr_1fr] gap-x-12 gap-y-8 font-medium relative max-h-80 w-full">
      <h1 class="text-3xl whitespace-nowrap">
        <span class="text-[#005693]">Мусоровоз №</span>
        <br>
        <span class="text-[#00B2FF]">А888АА 53</span>
      </h1>
      <img src="${vehicle.src}" alt="Мусоровоз" class="-mt-20 self-end col-span-2 w-full">
      <section class="flex gap-4 items-center whitespace-nowrap">
        <span class="text-4xl text-center text-white py-3 bg-[#00B2FF] rounded-lg w-16 h-16">${vehicle.unloading}</span>
        <span class="text-[#36393F] text-lg leading-none m-0">выгрузок<br>за сегодня</span>
      </section>
      <section class="flex gap-4 items-center whitespace-nowrap">
        <span class="text-4xl text-center text-white py-3 bg-[#00B2FF] rounded-lg w-16 h-16">${vehicle.loading}</span>
        <span class="text-[#36393F] text-lg leading-none m-0">загрузок<br>за сегодня</span>
      </section>
      <section class="flex items-center justify-self-center">
        <span class="text-center text-[#36393F] text-lg leading-none m-0">Нарушений<br>нет</span>
      </section>
      <section class="flex flex-col gap-2 justify-between">
        <span class="text-[#36393F] text-base leading-none m-0">Номер для связи</span>
        <span class="text-[#005693] text-xl leading-none m-0">8 999 000 00 00</span>
      </section>
      <section class="flex flex-col gap-2 justify-between">
        <span class="text-[#36393F] text-base leading-none m-0">В работе сегодня</span>
        <span class="text-[#005693] text-xl leading-none m-0">3:45:48</span>
      </section>
      <section class="flex flex-col gap-2 justify-between items-center justify-self-center">
        <span class="text-center text-[#36393F] text-base leading-none m-0">Превышения<br>скорости</span>
        <span class="text-center text-[#005693] text-xl leading-none m-0">0</span>
      </section>
    </article>
  `, { maxWidth: 600 });

  // moveMarker(marker, L.latLng(vehicle.lat, vehicle.lng), 1000);

  switch (index) {
    case 0:
      setInterval(() => {
        const latLng = route1latLng.next().value;
        if (!latLng) route1latLng = getRoute1LatLng();
        moveMarker(marker, latLng, 1000);
      }, 1000);
      break;
    case 1:
      setInterval(() => {
        const latLng = route2latLng.next().value;
        if (!latLng) route2latLng = getRoute2LatLng();
        moveMarker(marker, latLng, 1000);
      }, 1000);
      break;
    case 2:
      setInterval(() => {
        const latLng = route3latLng.next().value;
        if (!latLng) route3latLng = getRoute3LatLng();
        moveMarker(marker, latLng, 1000);
      }, 1000);
      break;
  }
});

// const statisticControl = L.control({
//   position: 'topright'
// });
//
// statisticControl.onAdd = () => {
//   const span = L.DomUtil.create('span', 'statistic');
//   span.textContent = `Всего машин: ${vehicles.length}`;
//   return span;
// }
//
// statisticControl.addTo(map);

function moveMarker(marker, destination, duration) {
  if (!destination) return;

  const startPosition = marker.getLatLng(),
      startTime = performance.now();

  function moveMarkerStep(timestamp) {
    let progress = (timestamp - startTime) / duration;

    if (progress > 1) progress = 1;

    const currentPosition = L.latLng(
        startPosition.lat + progress * (destination.lat - startPosition.lat),
        startPosition.lng + progress * (destination.lng - startPosition.lng)
    );

    marker.setLatLng(currentPosition);

    if (progress < 1) requestAnimationFrame(moveMarkerStep);
  }

  requestAnimationFrame(moveMarkerStep);
}

document.getElementById('date').textContent = (new Date()).toLocaleDateString('ru', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});