import React, { Component } from 'react';
import ServiceSelectorView from './ServiceSelectorView';

class ServiceSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, options, rightBorder = false } = this.props;
    return (
      <ServiceSelectorView
        label={label}
        options={options}
        rightBorder={rightBorder}
      />
    );
  }
}

export default ServiceSelector;
