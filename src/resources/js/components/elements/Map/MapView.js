import React from 'react';
import L from 'leaflet';
import classNames from 'classnames';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import MarkerIcon from '../../../../images/png/marker-icon.png';

const customMarker = new L.icon({ iconUrl: MarkerIcon });

const MapView = ({ points, center, selectedEquipment, hide }) => {
  if (selectedEquipment) {
    // eslint-disable-next-line no-param-reassign
    points = [selectedEquipment];
  }
  return (
    <Map
      className={classNames('leaflet-container', { 'leaflet-container--hide': hide })}
      center={[center.latitude, center.longitude]}
      zoom={13}
      maxZoom={40}
      animate
      attributionControl
      zoomControl
      doubleClickZoom
      scrollWheelZoom
      dragging
      easeLinearity={0.35}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((point) => (
        <Marker
          key={point.id}
          position={[point.latitude, point.longitude]}
          icon={customMarker}
        >
          <Popup>
            <div className="popup">
              <div className="popup__custodian-name">
                {point.custodian_name}
              </div>
              <div className="popup__address">
                {`${point.address_locality}, ${point.address_street_address}`}
              </div>
              <div className="popup__address">
                {point.work_shedule}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default MapView;
