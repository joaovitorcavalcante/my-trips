import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  places: Place[];
};

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, location: l }) => (
        <Marker
          key={`place-${id}`}
          title={name}
          position={[l.latitude, l.longitude]}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
