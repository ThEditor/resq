import clsxm from '@/lib/clsxm';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export interface MapProps {
  className?: string;
  markerPosition?: [number, number];
  containerRef: React.MutableRefObject<null>;
}

const Map = React.forwardRef(
  ({ className, containerRef, markerPosition, ...rest }: MapProps) => {
    return (
      <MapContainer
        {...rest}
        ref={containerRef}
        className={clsxm(className, 'h-screen w-full')}
        center={markerPosition}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markerPosition && <Marker position={markerPosition}></Marker>}
      </MapContainer>
    );
  }
);

export default Map;
