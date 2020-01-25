import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import { fetchEquipments as fetchEquipmentsAction } from '../../../redux/thunks/equipments';
import { applyFiltersToEquipments as applyFiltersToEquipmentsAction } from '../../../redux/thunks/filters';

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    const { location, fetchEquipments, applyFiltersToEquipments } = this.props;
    const query = new URLSearchParams(location.search);
    if (query.has('id_u')) {
      applyFiltersToEquipments({
        id_u: query.get('id_u'),
        address_locality: '',
      });
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
  applyFiltersToEquipments: applyFiltersToEquipmentsAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
