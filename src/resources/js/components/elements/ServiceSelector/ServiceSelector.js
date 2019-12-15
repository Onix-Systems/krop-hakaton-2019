import React, { Component } from 'react';
import ServiceSelectorView from './ServiceSelectorView';

class ServiceSelector extends Component {
  render() {
    const { onServiceChanged, value, label, options, rightBorder = false } = this.props;
    return (
      <ServiceSelectorView
        label={label}
        selected={value}
        options={options}
        onServiceChanged={onServiceChanged}
        rightBorder={rightBorder}
      />
    );
  }
}

export default ServiceSelector;
