import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function Map() {
  const markers = [
    {
      geocode: [-7.7520206, 110.491467], //prambanan
      popUp: "Candi Prambanan",
    },
    {
      geocode: [-7.608, 110.204002], //borobudur
      popUp: "Candi Borobudur",
    },
    {
      geocode: [-7.792333, 110.443333], //goa pindul
      popUp: "Goa Pindul",
    },
    {
      geocode: [-8.033333, 110.433333], //pantai parangtritis
      popUp: "Pantai Parangtritis",
    },
    {
      geocode: [-7.796111, 110.366389], //taman sari
      popUp: "Taman Sari",
    },
    {
      geocode: [-7.797068, 110.370529], //tugu jogja
      popUp: "Tugu Jogja",
    },
    {
      geocode: [-7.811885, 110.383333], //alun alun kidul
      popUp: "Alun Alun Kidul",
    },
    {
      geocode: [-7.799722, 110.382222], //keraton jogja
      popUp: "Keraton Jogja",
    },
    {
      geocode: [-7.5442,110.4333], //merapi
      popUp: "Gunung Merapi",
    },
    {
      geocode: [-7.793006, 110.365981], //jalan malioboro
      popUp: "Malioboro",
    },
  ];

  return (
    <MapContainer center={[-7.796111, 110.366389]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup>

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
