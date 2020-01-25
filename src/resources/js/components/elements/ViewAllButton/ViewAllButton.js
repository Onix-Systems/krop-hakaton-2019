import React from 'react';
import { connect } from 'react-redux';
import { fetchEquipments as fetchEquipmentsAction } from '../../../redux/thunks/equipments'

const ViewAllButton = ({ loading, fetchEquipments }) => (
  <button
    type="button"
    className="card__button col-sm-6 accordion-title__bottom_row--margin float-right"
    disabled={loading}
    onClick={fetchEquipments}
  >
    <span>ПЕРЕГЛЯНУТИ ВСІ ВАРІАНТИ</span>
  </button>
);

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchEquipments: fetchEquipmentsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllButton);
