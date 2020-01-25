import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import { fetchEquipments as fetchEquipmentsAction } from '../../../redux/thunks/equipments';

class App extends Component {
  componentDidMount() {
    const { fetchEquipments } = this.props;
    fetchEquipments();
  }

  render() {
    const {
      location,
      loading,
      notFound,
      error
    } = this.props;
    const query = new URLSearchParams(location.search);
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
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
