import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapPage() {
  return (
    <>
      <MapContainer center={[-6.2562185, 106.6159875, 17]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <br />
      <p class="font-serif text-5xl mb-5 mt-52 text-white ml-12 w-1/3">
        Adventure Map
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
