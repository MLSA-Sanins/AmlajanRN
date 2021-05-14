import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {primary, secondary} from '../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';
import MapScreen from '../pages/MapScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="home" color={primary.main} size={30} />
          ),
          // tabBarBadge: 3,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <AntDesign name="find" color={primary.main} size={30} />
          ),
          // tabBarBadge: 3,
        }}
        name="Maps"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <AntDesign name="user" color={primary.main} size={30} />
          ),
          // tabBarBadge: 3,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
