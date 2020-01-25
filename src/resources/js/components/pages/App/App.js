import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';
import { fetchEquipments } from '../../../redux/asyncActions/equipments'

class App extends Component {
  componentDidMount() {
    this.props.fetchEquipments();
  }

  render() {
    const {location, isLoading} = this.props;
    const query = new URLSearchParams(location.search);
    return (
      <AppView isLoading={isLoading} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.equipments.fetching,
});

const mapDispatchToProps = {
  fetchEquipments,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
