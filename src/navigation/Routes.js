import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer,DarkTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoadingScreen from '../components/LoadingView';
import {AuthContext} from '../context/AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <LoadingScreen />;
  }

  if (!user) {
    return (
      <NavigationContainer theme={DarkTheme}>
        <AuthStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <AppStack />
    </NavigationContainer>
  );
};
export default Routes;
