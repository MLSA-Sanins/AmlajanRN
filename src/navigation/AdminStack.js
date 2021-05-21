import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import AdminPage from '../pages/AdminScreen/AdminPage';
import ProfileScreen from '../pages/ProfileScreen';
import MapScreen from '../pages/MapScreen';

const Tab = createBottomTabNavigator();

export default function AdminStack() {
  const theme = useSelector(state => state.themes.theme);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.BottomNav,
          backgroundColor: theme.BOTTOM_NAVBAR_COLOR,
        },
      }}>
      <Tab.Screen
        name="AdminHome"
        options={{
          tabBarLabel: 'AHome',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="home"
              color={`${
                focused
                  ? theme.BOTTOM_NAVBAR_ACTIVE_ICON_COLOR
                  : theme.BOTTOM_NAVBAR_INACTIVE_ICON_COLOR
              }`}
              size={30}
            />
          ),
        }}
        component={AdminPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="find"
              color={`${
                focused
                  ? theme.BOTTOM_NAVBAR_ACTIVE_ICON_COLOR
                  : theme.BOTTOM_NAVBAR_INACTIVE_ICON_COLOR
              }`}
              size={30}
            />
          ),
        }}
        name="Maps"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="user"
              color={`${
                focused
                  ? theme.BOTTOM_NAVBAR_ACTIVE_ICON_COLOR
                  : theme.BOTTOM_NAVBAR_INACTIVE_ICON_COLOR
              }`}
              size={30}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
