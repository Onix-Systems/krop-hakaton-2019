import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

const List = ({ equipments, pagination, selectedEquipment }) => (
  <ListView
    equipments={equipments}
    pagination={pagination}
    selectedEquipment={selectedEquipment}
  />
);

const mapStateToProps = (state) => ({
  equipments: state.equipments.filtered,
  pagination: state.equipments.pagination,
  selectedEquipment: state.equipments.selected,
});

export default connect(mapStateToProps)(List);
