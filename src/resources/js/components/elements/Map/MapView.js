import React from 'react';
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from "react-redux";


const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
});

class MapView extends React.Component {

  render() {
    let array = this.props.equipments

    const result = Array.from(new Set(array.map(s => s.latitude)))
      .map(latitude => {
        return {
          0: array.find(s => s.latitude === latitude)
        }
      })

    return (
      <LeafletMap className="leaflet-container "
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
        {
          result.map(el => {
            let _position = [el[0].latitude, el[0].longitude];
            return (
              <Marker key={el[0].id} position={_position} icon={customMarker}>
                <Popup>
                  <div>{el[0].custodian_name}</div>

                  <div>{el[0].address_region} {el[0].address_locality} {el[0].address_street_address}</div>
                  <div>{el[0].work_shedule}</div>
                </Popup>
              </Marker>
            );

          })
        }
      </LeafletMap>
    )
  }
}

const mapStateToProps = (state) => ({
  equipments: state.equipments.filtered,
  error: state.equipments.error,
});

export default connect(
  mapStateToProps,
)(MapView);
