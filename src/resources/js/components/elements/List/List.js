import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

class List extends Component {
  render() {
    const { equipments } = this.props;
    return (
      <ListView
        equipments={equipments}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  equipments: state.equipments.filtered,
  filters: state.filters,
});

export default connect(mapStateToProps)(List);
