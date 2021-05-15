/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RouteWrapper from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Montserrat-Regular',
    },
  };
  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);
  return (
    <Provider store={store}>
      <RouteWrapper />
    </Provider>
  );
};

export default App;
