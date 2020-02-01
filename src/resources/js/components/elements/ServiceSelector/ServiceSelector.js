import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceSelectorView from './ServiceSelectorView';

const ServiceSelector = ({
  onServiceChanged, value, label, options, loading, selectedEquipment, rightBorder = false,
}) => (
  <ServiceSelectorView
    label={label}
    selected={value}
    options={options}
    onServiceChanged={onServiceChanged}
    rightBorder={rightBorder}
    disabled={loading || selectedEquipment}
  />
);

const mapStateToProps = (state) => ({
  loading: state.loading,
  selectedEquipment: !!state.equipments.selected,
});

export default connect(mapStateToProps)(ServiceSelector);
