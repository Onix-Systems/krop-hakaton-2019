import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFieldView from './SearchFieldView';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { text: '', value: '' },
    };
  }

  onSearchChanged = (event, { value }) => {
    const { options } = this.props;
    this.setState({
      value: options.find((option) => option.value === value),
    });
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
  options: state.availableFilters.search,
});

export default connect(mapStateToProps)(SearchField);
