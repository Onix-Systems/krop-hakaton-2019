import React from 'react';
import { withRouter } from 'react-router-dom';
import AppView from './AppView';

const App = ({ location }) => {
  const query = new URLSearchParams(location.search);
  return (
    <AppView />
  );
};

export default withRouter(App);
