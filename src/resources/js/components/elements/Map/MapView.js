import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const leafletContainer = {
  height: '600px',
  width: '100%'
}

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  // iconSize: [25, 41],
  // iconAnchor: [13, 0]
});

class MapView extends React.Component {
  render() {
    return (
      <LeafletMap style={leafletContainer}
        center={[48.49, 32.25]}
        zoom={12}
        maxZoom={40}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={false}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[48.497421, 32.253974]} icon={customMarker}>
          <Popup>
            This is med.clinic with rengen
          </Popup>
        </Marker>
        <Marker position={[48.534814, 32.271381]} icon={customMarker}>
          <Popup>
            This is med.clinic with rengen
          </Popup>
        </Marker>
      </LeafletMap>
    )
  }
}

export default MapView;
