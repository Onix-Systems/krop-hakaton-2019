import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import {
  fetchUniqueEquipment as fetchUniqueEquipmentAction,
  filterEquipments as filterEquipmentsAction,
} from '../../../redux/thunks/equipments';
import { showOnMap as showOnMapAction } from '../../../redux/thunks/map';
import { laptopOrSmallerScreen } from '../../../helpers';

class App extends Component {
  componentDidMount() {
    const {
      location,
      fetchUniqueEquipment,
      filterEquipments,
    } = this.props;
    const query = new URLSearchParams(location.search);
    if (query.has('id_u')) {
      fetchUniqueEquipment(query.get('id_u'));
    } else if (query.keys().next().value) {
      filterEquipments(location.search);
    } else {
      filterEquipments('');
    }
  }

  componentDidUpdate(prevProps) {
    const { location, fetchUniqueEquipment, filterEquipments, showOnMap } = this.props;
    const query = new URLSearchParams(location.search);

    if (location.search !== prevProps.location.search) {
      if (query.has('id_u')) {
        if (laptopOrSmallerScreen()) {
          showOnMap(query.get('id_u'));
        } else {
          fetchUniqueEquipment(query.get('id_u'));
        }
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
  fetchUniqueEquipment: fetchUniqueEquipmentAction,
  filterEquipments: filterEquipmentsAction,
  showOnMap: showOnMapAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
