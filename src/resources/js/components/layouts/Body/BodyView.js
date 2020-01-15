import React from 'react';
import List from '../../elements/List/List';
import Map from '../../elements/Map/Map';

const BodyView = () => (
  <div className="body container-fluid">
    <div className="col-xl-6 order-xl-1 order-2">
      <List />
    </div>
    <div className="col-xl-6 order-xl-2 order-1">
      <Map />
    </div>
  </div>
);

export default BodyView;
