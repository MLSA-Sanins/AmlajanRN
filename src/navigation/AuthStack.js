import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';

import NavigationHeader from '../components/NavigationHeader';
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen';
import OnboardingScreen from '../pages/OnboardingScreen';
import PrivacyPolicyScreen from '../pages/PrivacyPolicyScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const theme = useSelector(state => state.themes.theme);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '348071048651-vsp7behqu23rn98o748jk6q6sss0o6f1.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        options={{header: () => null}}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
            shadowColor: theme.PRIMARY_BACKGROUND_COLOR,
            elevation: 0,
          },
          headerLeft: () => (
            <NavigationHeader onPress={() => navigation.navigate('Login')} />
          ),
        })}
        name="Signup"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
            shadowColor: theme.PRIMARY_BACKGROUND_COLOR,
            elevation: 0,
          },
          headerLeft: () => (
            <NavigationHeader onPress={() => navigation.navigate('Login')} />
          ),
        })}
        component={PrivacyPolicyScreen}
      />
    </Stack.Navigator>
  );
}
