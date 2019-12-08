import React, { Component } from 'react';
import ServiceSelectorView from './ServiceSelectorView';

class ServiceSelector extends Component {
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
    const { label, options, rightBorder = false } = this.props;
    return (
      <ServiceSelectorView
        label={label}
        value={value}
        options={options}
        onServiceChanged={this.onSearchChanged}
        rightBorder={rightBorder}
      />
    );
  }
}

export default ServiceSelector;
