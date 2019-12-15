import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Placeholder } from 'semantic-ui-react';
import ListView from './ListView';
import filterEquipmentsAction from '../../../redux/asyncActions/equipments'

class List extends Component {
  componentDidMount() {
    const { filter, filters } = this.props;
    filter({}, filters);
  }

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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterEquipmentsAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
