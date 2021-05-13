import React from 'react';
import Routes from './Routes';
import {AuthProvider} from '../context/AuthProvider';

const RouteWrapper = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default RouteWrapper;
