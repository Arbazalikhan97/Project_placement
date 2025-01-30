import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ locations }) => (
  <MapContainer center={[51.505, -0.09]} zoom={13}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {locations.map((loc, index) => (
      <Marker key={index} position={[loc.lat, loc.lng]} />
    ))}
  </MapContainer>
);

export default MapView;