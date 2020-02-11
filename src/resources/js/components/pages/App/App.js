import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import {
  fetchUniqueEquipment as fetchUniqueEquipmentAction,
  filterEquipments as filterEquipmentsAction,
} from '../../../redux/thunks/equipments';
import { showOnMap as showOnMapAction } from '../../../redux/thunks/map';
import { resize as resizeEvent } from '../../../redux/actions/resize';

class App extends Component {
  constructor(props) {
    super(props);
    const { resize } = this.props;
    window.addEventListener('resize', resize);
  }

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
    const {
      location,
      fetchUniqueEquipment,
      filterEquipments,
      showOnMap,
      resize,
    } = this.props;
    const query = new URLSearchParams(location.search);

    if (location.search !== prevProps.location.search) {
      if (query.has('id_u')) {
        if (resize.laptopOrSmallerScreen) {
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
  resize: state.resize,
});

const mapDispatchToProps = {
  fetchUniqueEquipment: fetchUniqueEquipmentAction,
  filterEquipments: filterEquipmentsAction,
  showOnMap: showOnMapAction,
  resize: resizeEvent,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
