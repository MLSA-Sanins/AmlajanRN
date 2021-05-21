import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoadingScreen from '../components/LoadingView';
import {connect, useDispatch} from 'react-redux';
import {FETCHING_INITIAL_USER} from '../redux/constants';
import {getInitialUserData} from '../redux/actions/userActions';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = ({getInitialUserData,isLoading}) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch({type: FETCHING_INITIAL_USER});
    console.log(user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    getInitialUserData(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
const mapStateToProps = state => {
  return {isLoading: state.user.isLoading};
};
export default connect(null, {
  getInitialUserData: getInitialUserData,
})(Routes);
