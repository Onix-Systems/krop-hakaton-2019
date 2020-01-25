import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

class List extends Component {
  render() {
    const { equipments, selectedEquipment } = this.props;
    return (
      <ListView
        equipments={equipments}
        selectedEquipment={selectedEquipment}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  equipments: state.equipments.filtered,
  selectedEquipment: state.equipments.selected,
});

export default connect(mapStateToProps)(List);
