import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import {
  fetchEquipments as fetchEquipmentsAction,
  fetchUniqueEquipment as fetchUniqueEquipmentAction,
  filterEquipments as filterEquipmentsAction,
} from '../../../redux/thunks/equipments';

class App extends Component {
  componentDidMount() {
    const {
      location,
      fetchEquipments,
      fetchUniqueEquipment,
      filterEquipments,
    } = this.props;
    const query = new URLSearchParams(location.search);
    if (query.has('id_u')) {
      fetchUniqueEquipment(query.get('id_u'));
    } else if (query.keys().next().value) {
      filterEquipments(location.search);
    } else {
      fetchEquipments();
    }
  }

  componentDidUpdate(prevProps) {
    const { location, fetchUniqueEquipment, filterEquipments } = this.props;
    const query = new URLSearchParams(location.search);

    if (location.search !== prevProps.location.search) {
      if (query.has('id_u')) {
        fetchUniqueEquipment(query.get('id_u'));
      } else {
        filterEquipments(location.search);
      }
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
  filterEquipments: filterEquipmentsAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
