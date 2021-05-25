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
import rootStore from './src/redux/store';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import {PersistGate} from 'redux-persist/integration/react';
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from 'react-native-appearance';

Appearance.getColorScheme();

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Montserrat-Regular',
    },
  };
  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  const {store, persistor} = rootStore();
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouteWrapper loading={null} />
        </PersistGate>
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
