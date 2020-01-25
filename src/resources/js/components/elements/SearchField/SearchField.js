import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFieldView from './SearchFieldView';
import applyFilterToEquipmentsAction from '../../../redux/thunks/filters';
import { changeFilter as changeFilterAction } from '../../../redux/actions/filters';
import { mapFilterToDropdownProp } from '../../../helpers';

class SearchField extends Component {
  onChange = (value) => {
    const { changeFilter, applyFilterToEquipments } = this.props;
    if (value.length > 2 || !value) {
      applyFilterToEquipments('q', value);
    } else {
      changeFilter('q', value);
    }
  }

  onSearchChanged = (event, { value: newValue }) => {
    this.onChange(newValue);
  }

  onSearchQueryChanged = (event, { searchQuery: value }) => {
    this.onChange(value);
  }

  render() {
    const { options, loading, value } = this.props;
    return (
      <SearchFieldView
        options={options}
        value={value}
        onSearchChanged={this.onSearchChanged}
        onSearchQueryChanged={this.onSearchQueryChanged}
        disabled={loading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.availableFilters.q,
  value: mapFilterToDropdownProp(state.filters.q),
  loading: state.loading,
});

const mapDispatchToProps = {
  applyFilterToEquipments: applyFilterToEquipmentsAction,
  changeFilter: changeFilterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
