import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceSelectorView from './ServiceSelectorView';

class ServiceSelector extends Component {
  render() {
    const {
      onServiceChanged, value, label, options, loading, rightBorder = false
    } = this.props;
    return (
      <ServiceSelectorView
        label={label}
        selected={value}
        options={options}
        onServiceChanged={onServiceChanged}
        rightBorder={rightBorder}
        disabled={loading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(ServiceSelector);
