import React from 'react';
import List from '../../elements/List/List';
import Map from '../../elements/Map/Map';

const BodyView = () => (
  <div className="body container-fluid">
    <div className="col-6">
      <List />
    </div>
    <div className="col-6">
      <Map />
    </div>
  </div>
);

export default BodyView;
