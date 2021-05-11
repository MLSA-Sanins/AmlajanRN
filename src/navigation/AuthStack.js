import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen';
import OnboardingScreen from '../pages/OnboardingScreen';
import PrivacyPolicyScreen from '../pages/PrivacyPolicyScreen';

const AppStack = createStackNavigator();

export default function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState();

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
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen
        options={{header: () => null}}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <AppStack.Screen
        options={{header: () => null}}
        name="Login"
        component={LoginScreen}
      />
      <AppStack.Screen
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={styles.headerStyle}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
        name="Signup"
        component={SignUpScreen}
      />
      <AppStack.Screen
        name="PrivacyPolicy"
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={styles.headerStyle}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
        component={PrivacyPolicyScreen}
      />
    </AppStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 10,
  },
});
