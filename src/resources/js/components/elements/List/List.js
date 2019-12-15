import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Placeholder } from 'semantic-ui-react';
import ListView from './ListView';
import fetchEquipmentsService from '../../../services/equipments';

class List extends Component {
  componentDidMount() {
    const { fetchEquipments } = this.props;
    fetchEquipments();
  }

  render() {
    const { error, equipments } = this.props;
    if (!equipments.length) return (<Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>);

    return (
      <ListView
        equipments={equipments}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  equipments: state.equipments.filtered,
  error: state.equipments.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchEquipments: fetchEquipmentsService,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
