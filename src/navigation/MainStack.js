import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';

import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';
import MapScreen from '../pages/MapScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => {
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
        name="Home"
        options={{
          tabBarLabel: 'Home',
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
        component={HomeScreen}
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
};

const mapStateToProps = state => {
  return {isAdmin: state.user.currentUser};
};

export default connect(mapStateToProps, null)(MainStack);

const styles = StyleSheet.create({
  BottomNav: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 5,
    borderRadius: 15,
    height: 60,
  },
});
