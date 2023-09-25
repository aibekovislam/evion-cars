import "../css/home.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../css/images/Без названия.png"),
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// markers
const markers = [
  {
    geocode: [40.570103, 72.796971],
    popUp: "EvionOsh\nEVION MK Grand\n40\nулица Касымбекова, Osh, Kyrgyzstan",
  },
  {
    geocode: [40.532083, 72.808081],
    popUp: "EvionOsh\nEVION Globus, Аскар Шакиров, 275/1\n80",
  },
  {
    geocode: [42.8691415, 74.6148381],
    popUp:
      "EVION\nEVION Шопокова Московская\n40\nул. Шопокова & ул. Московская, Бишкек, Кыргызстан",
  },
  {
    geocode: [59.9310584, 30.3609097],
    popUp: "TOUCH test\nTest New\n200\nСанкт-Петербург, Россия",
  },
  {
    geocode: [42.8747777, 74.6009412],
    popUp: "EVION\n87 ул. Киевская, Бишкек, Кыргызстан",
  },
  {
    geocode: [40.5288018, 72.75728220000001],
    popUp: "EVION Осмонова, г. Ош",
  },
  {
    geocode: [42.878968, 74.59729849999999],
    popUp: "EVION\nEVION Стадион 'Спартак'",
  },
  {
    geocode: [42.887835, 74.6630502],
    popUp: "EVION\nEVION Арзу",
  },
  {
    geocode: [42.8161325, 74.6337134],
    popUp: "EVION\nEVION Нуркамал 13/1",
  },
  {
    geocode: [42.8515391, 74.6157539],
    popUp: "EVION\nEVION GLOBUS Медерова",
  },
  {
    geocode: [42.8624482, 74.6758117],
    popUp: "EVION\nEVION АЮ Гранд",
  },
  {
    geocode: [42.85172826495414, 74.546246185977],
    popUp: "EVION\nEVION Муромская 1",
  },
  {
    geocode: [42.597257, 76.849831],
    popUp: "EVION\nEVION Пансионат 'Эдельвейс'\nOrnok, Kyrgyzstan",
  },
  {
    geocode: [42.8750736, 74.60037609999999],
    popUp: "EVION\nEVION Орион-2",
  },
  {
    geocode: [42.8745429, 74.4224705],
    popUp: "EVION\nEVION Авторынок RIOM",
  },
  {
    geocode: [42.8618858, 74.6906611],
    popUp: "EVION\nEVION Ауэзова 24",
  },
  {
    geocode: [42.8333035, 74.6035997],
    popUp: "EVION\nEVION 9 мкр, Камский 7В\n40",
  },
  {
    geocode: [42.85656849999999, 74.6467504],
    popUp: "EVION\nEVION Анкара 1/16/1\n22\n1 Ankara St, Bishkek, Kyrgyzstan",
  },
];

function Map() {
  return (
    <MapContainer center={[42.8746, 74.5999]} zoom={11.5}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* WATERCOLOR CUSTOM TILES */}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
      {/* GOOGLE MAPS TILES */}
      {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

        {/* Hard coded markers */}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
