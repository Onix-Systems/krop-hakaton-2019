import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import SearchFieldView from './SearchFieldView';
import { createSearchStringFromProps, mapQueryStringParamToProp } from '../../../helpers';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.autocompleteDebounced = debounce(500, props.history.push);
  }

  onChange = (value) => {
    const { location } = this.props;
    const searchString = createSearchStringFromProps(location.search, { q: value });
    this.autocompleteDebounced(searchString);
  }

  onSearchChanged = (event, { value }) => {
    this.onChange(value);
  }

  onSearchQueryChanged = (event, { searchQuery }) => {
    this.onChange(searchQuery);
  }

  render() {
    const { options, loading, location } = this.props;
    const value = mapQueryStringParamToProp(location.search, 'q', '');
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
  loading: state.loading,
});

export default withRouter(
  connect(mapStateToProps)(SearchField),
);
