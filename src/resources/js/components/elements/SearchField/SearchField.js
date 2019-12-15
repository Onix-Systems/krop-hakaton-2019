import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFieldView from './SearchFieldView';
import { bindActionCreators } from 'redux';
import filterAction from '../../../redux/actionCreators/filters';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { text: '', value: '' },
    };
  }

  onSearchChanged = (event, { value }) => {
    const { options } = this.props;
    filter({ filterType: 'search', value });
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
