import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Placeholder } from 'semantic-ui-react';
import ListView from './ListView';
import { filterEquipments } from '../../../redux/asyncActions/equipments';

class List extends Component {
  render() {
    const { equipments } = this.props;
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
  filters: state.filters,
});

const mapDispatchToProps = {
  filterEquipments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
