import React from 'react';
import List from '../../elements/List/List';
import Map from '../../elements/Map/Map';

const BodyView = () => (
  <div className="body container-fluid pr-0 pt-5">
    <div className="col-6 pt-5">
      <List />
    </div>
    <div className="col-6 p-0 pt-4 mt-2">
      <Map />
    </div>
  </div>
);

export default BodyView;
