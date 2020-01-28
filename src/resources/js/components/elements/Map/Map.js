import React from 'react';
import { connect } from 'react-redux';
import MapView from './MapView';
import { mapEquipmentsToPoints, laptop } from '../../../helpers';

const Map = ({ selectedEquipment, hide, points, center }) => {
  return (
    <MapView
      hide={hide}
      points={points}
      center={center}
      selectedEquipment={selectedEquipment}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedEquipment: state.equipments.selected,
  hide: laptop() && !state.map,
  ...mapEquipmentsToPoints(state.equipments.filtered),
});

export default connect(mapStateToProps)(Map);
