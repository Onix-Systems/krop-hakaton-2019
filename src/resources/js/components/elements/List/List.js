import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListView from './ListView';
import fetchEquipmentsAction from '../../services/equipments';

class List extends Component {
  componentDidMount() {
    const { fetchEquipments } = this.props;
    fetchEquipments();
  }

  render() {
    const { error, equipments } = this.props;
    console.log(equipments);
    if (!equipments.length) return (<div>Loader...</div>);

    return (
      <ListView
        equipments={equipments}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  equipments: state.equipments.data,
  error: state.equipments.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchEquipments: fetchEquipmentsAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
