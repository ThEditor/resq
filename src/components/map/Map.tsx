import clsxm from '@/lib/clsxm';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import L, { LeafletMouseEventHandlerFn } from 'leaflet';
import axios from '@/lib/api/axios';
import { IAgency } from '@/components/requests/AgencySelector';

export interface MapProps {
  className?: string;
  markerPosition?: [number, number];
  requestMarkerLocation?: [number, number];
  setRequestMarkerLocation: Dispatch<SetStateAction<[number, number]>>;
  handleOnSelect: (agency: IAgency) => void;
  containerRef: React.MutableRefObject<null>;
  onClick: (loc: [number, number]) => void;
}

const Map = React.forwardRef(
  (
    {
      className,
      containerRef,
      markerPosition,
      requestMarkerLocation,
      setRequestMarkerLocation,
      handleOnSelect,
      ...rest
    }: MapProps,
    ref
  ) => {
    const redMarkerIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    useEffect(() => {
      axios.get('/agencies').then((x) => {
        const list: IAgency[] = x.data;
        for (const agency of list) {
          L.marker(agency.coordinates)
            .addTo(containerRef.current!)
            .on('mousedown', () => {
              handleOnSelect(agency);
            });
        }
      });
    }, []);
    return (
      <MapContainer
        {...rest}
        ref={containerRef}
        className={clsxm(className, 'h-screen w-full')}
        center={markerPosition}
        zoom={15}
        doubleClickZoom={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {requestMarkerLocation && (
          <Marker
            position={requestMarkerLocation}
            icon={redMarkerIcon}
          ></Marker>
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
    dblclick: onMapClick,
  });

  return null; // This component doesn't render anything, it's just for event handling
};

export default Map;
