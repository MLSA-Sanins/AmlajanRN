import React from 'react';
import Routes from './Routes';
import {AuthProvider} from '../context/AuthProvider';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';

const RouteWrapper = () => {
  const theme = useSelector(state => state.themes.theme);
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RouteWrapper;
