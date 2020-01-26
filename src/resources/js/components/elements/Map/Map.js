import React from 'react';
import { connect } from 'react-redux';
import MapView from './MapView';
import { mapEquipmentsToPoints } from '../../../helpers';

const Map = ({ selectedEquipment, points, center }) => (
  <MapView
    points={points}
    center={center}
    selectedEquipment={selectedEquipment}
  />
);

const mapStateToProps = (state) => ({
  selectedEquipment: state.equipments.selected,
  ...mapEquipmentsToPoints(state.equipments.filtered),
});

export default connect(mapStateToProps)(Map);
