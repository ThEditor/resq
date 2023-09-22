import clsxm from '@/lib/clsxm';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import React, { Dispatch, SetStateAction } from 'react';

import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { LeafletMouseEventHandlerFn } from 'leaflet';

export interface MapProps {
  className?: string;
  markerPosition?: [number, number];
  requestMarkerLocation?: [number, number];
  setRequestMarkerLocation: Dispatch<SetStateAction<[number, number]>>;
  containerRef: React.MutableRefObject<null>;
  onClick: (loc: [number, number]) => void;
}

const Map = React.forwardRef(
  ({
    className,
    containerRef,
    markerPosition,
    requestMarkerLocation,
    setRequestMarkerLocation,
    ...rest
  }: MapProps) => {
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
        {requestMarkerLocation && (
          <Marker position={requestMarkerLocation}></Marker>
        )}
        <MapClickHandler
          onMapClick={(e) =>
            setRequestMarkerLocation([e.latlng.lat, e.latlng.lng])
          }
        />
      </MapContainer>
    );
  }
);

const MapClickHandler = ({
  onMapClick,
}: {
  onMapClick: LeafletMouseEventHandlerFn;
}) => {
  const map = useMapEvents({
    click: onMapClick,
  });

  return null; // This component doesn't render anything, it's just for event handling
};

export default Map;
