import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useSelector, connect} from 'react-redux';
import LoadingView from '../components/LoadingView';
import {getAllO2Providers} from '../redux/actions/providerActions';

import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';
import MapScreen from '../pages/MapScreen';
import AdminScreen from '../pages/AdminScreen';

const Tab = createBottomTabNavigator();

const MainStack = ({role}) => {
  const theme = useSelector(state => state.themes.theme);

  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.BottomNav,
          backgroundColor: theme.BOTTOM_NAVBAR_COLOR,
        },
      }}>
      {role === 'admin' && (
        <Tab.Screen
          name="Admin"
          options={{
            tabBarLabel: 'Admin',
            tabBarIcon: ({focused, color, size}) => (
              <AntDesign
                name="tool"
                color={`${
                  focused
                    ? theme.BOTTOM_NAVBAR_ACTIVE_ICON_COLOR
                    : theme.BOTTOM_NAVBAR_INACTIVE_ICON_COLOR
                }`}
                size={30}
              />
            ),
          }}
          component={AdminScreen}
        />
      )}
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
  return {role: state.user.currentUser.role};
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
