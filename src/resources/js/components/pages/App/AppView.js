import React from 'react';
import Header from '../../layouts/Header/Header';
import Body from '../../layouts/Body/Body';
import Loader from '../../layouts/Loader/Loader';

const AppView = ({ isLoading }) => (
  <div className="app">
    <Header />
    { isLoading ? <Loader /> : <Body /> }
  </div>
);

export default AppView;
