import React from 'react';
import { withRouter } from 'react-router-dom';

const App = ({ location }) => {
  const query = new URLSearchParams(location.search);
  return (
    <div className="app">
      {JSON.stringify(location)}
    </div>
  );
};

export default withRouter(App);
