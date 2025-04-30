import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapProps {
  className?: string;
  zoom?: number;
  disableInteraction?: boolean;
}

const Map: React.FC<MapProps> = ({ className = '', zoom = 13, disableInteraction = false }) => {
  const position: [number, number] = [30.0444, 31.2357];

  return (
    <div className={`${className}`}>
      <MapContainer
        center={position}
        zoom={zoom}
        className="h-full w-full rounded-lg"
        zoomControl={!disableInteraction}
        dragging={!disableInteraction}
        scrollWheelZoom={!disableInteraction}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">ShopCart Headquarters</h3>
              <p>Cairo, Egypt</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;