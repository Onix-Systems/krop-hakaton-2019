import React from 'react';
import { connect } from 'react-redux';
import List from '../../elements/List/List';
import Map from '../../elements/Map/Map';
import MapControl from '../../elements/MapControl/MapControl';

const BodyView = ({ resize }) => (
  <div className="body container-fluid">
    <div className="col-xl-6 order-xl-1 order-2">
      <List />
    </div>
    <div className="col-xl-6 order-xl-2 order-1">
      <Map />
    </div>
    {resize.laptopOrSmallerScreen && <MapControl />}
  </div>
);

const mapStateToProps = (state) => ({
  resize: state.resize,
});

export default connect(mapStateToProps)(BodyView);
