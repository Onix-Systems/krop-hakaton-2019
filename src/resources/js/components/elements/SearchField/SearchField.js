import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFieldView from './SearchFieldView';
import filterEquipmentsAction from '../../../redux/asyncActions/equipments';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSearchChanged = (event, { value }) => {
    const { filter, filters } = this.props;
    filter({ name: 'q', value }, filters);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const { options } = this.props;
    return (
      <SearchFieldView
        options={options}
        value={value}
        onSearchChanged={this.onSearchChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.availableFilters.q,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterEquipmentsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
