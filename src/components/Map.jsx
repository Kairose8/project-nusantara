import { popup } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
export default function Map() {
  const markers = [
    {
      geocode: [-7.7520206, 110.491467], //prambanan
      popUp: "Hello everybody 1",
    },
    {
      geocode: [-7.608, 110.204002], //borobudur
      popUp: "Hello everybody 2",
    },
    {
      geocode: [-7.792333, 110.443333],//goa pindul
      popUp: "Hello everybody 3"
    },
    {
      geocode: [-8.033333, 110.433333],//pantai parangtritis
      popUp: "Hello everybody 4"
    },
    {
      geocode: [-7.796111, 110.366389],//taman sari
      popUp: "Hello everybody 5"
    },
    {
      geocode: [-7.797068, 110.370529],//tugu jogja
      popUp: "Hello everybody 6"
    },
    {
      geocode: [-7.811885, 110.383333],//alun alun kidul
      popUp: "Hello everybody 7"
    },
    {
      geocode: [-7.799722, 110.382222],//keraton jogja
      popUp: "Hello everybody 8"
    },
    {
      geocode: [-7.811885, 110.383333],//mendut
      popUp: "Hello everybody 9"
    },
    {
      geocode: [-7.793006, 110.365981], //jalan malioboro
      popUp: "Hello everybody 10",
    },
  ];

  const customIcon = new Icon({
    iconUrl: "https://www.flaticon.com/free-icon/placeholder_684908",
    iconSize: [38, 38] //size icon

})
  return (
    <MapContainer center={[-7.796111, 110.366389]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
}