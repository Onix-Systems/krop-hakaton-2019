import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';
import SearchFieldView from './SearchFieldView';
import filterEquipmentsAction from '../../../redux/asyncActions/equipments';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        value: '',
        text: '',
        selected: false,
      },
    };
  }

  onChange = (newValue) => {
    const { filter, filters } = this.props;
    const { value } = this.state;
    const debouncedFilter = debounce(filter, 750);
    if (newValue.length > 2 || !newValue) {
      debouncedFilter({ name: 'q', value: newValue }, filters);
    }
    this.setState({
      value: {
        ...value,
        value: newValue,
        text: newValue,
      },
    });
  }

  // todo 1) loader with locking UI
  // todo 2) handle 404
  onSearchChanged = (event, { value: newValue }) => {
    this.onChange(newValue);
  }

  onSearchQueryChanged = (event, { searchQuery: newValue }) => {
    this.onChange(newValue);
  }

  render() {
    const { value } = this.state;
    const { options } = this.props;
    return (
      <SearchFieldView
        options={options}
        value={value}
        onSearchChanged={this.onSearchChanged}
        onSearchQueryChanged={this.onSearchQueryChanged}
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
