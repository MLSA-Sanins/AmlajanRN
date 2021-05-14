import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoadingScreen from '../components/LoadingView';
import {connect, useDispatch} from 'react-redux';
import {FETCHING_INITIAL_USER} from '../redux/constants';
import {getInitialUserData} from '../redux/actions/userActions';
import {AuthContext} from '../context/AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import MainStack from './MainStack';

const Routes = ({getInitialUserData}) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch({type: FETCHING_INITIAL_USER});
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    getInitialUserData(user);
  }
  // console.log(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <LoadingScreen />;
  }

  if (!user) {
    return (
      <NavigationContainer theme={DefaultTheme}>
        <AuthStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppStack />
    </NavigationContainer>
  );
};
export default connect(null, {
  getInitialUserData: getInitialUserData,
})(Routes);
