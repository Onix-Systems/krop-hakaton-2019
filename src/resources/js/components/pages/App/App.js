import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import {
  fetchEquipments as fetchEquipmentsAction,
  fetchUniqueEquipment as fetchUniqueEquipmentAction,
} from '../../../redux/thunks/equipments';

class App extends Component {
  componentDidMount() {
    const { location, fetchEquipments, fetchUniqueEquipment } = this.props;
    const query = new URLSearchParams(location.search);
    if (query.has('id_u')) {
      fetchUniqueEquipment(query.get('id_u'));
    } else {
      fetchEquipments();
    }
  }

  render() {
    const { loading, notFound, error } = this.props;
    return (
      <AppView
        notFound={notFound}
        error={error}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  notFound: state.equipments.notFound,
  error: state.equipments.error,
});

const mapDispatchToProps = {
  fetchEquipments: fetchEquipmentsAction,
  fetchUniqueEquipment: fetchUniqueEquipmentAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
