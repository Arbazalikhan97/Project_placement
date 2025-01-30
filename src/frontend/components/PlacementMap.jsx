// src/frontend/components/PlacementMap.jsx
import { Marker, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

export default function PlacementMap({ placements }) {
  return (
    <MarkerClusterGroup>
      {placements.map(placement => (
        <Marker 
          key={placement._id} 
          position={[placement.latitude, placement.longitude]}
        />
      ))}
    </MarkerClusterGroup>
  );
}