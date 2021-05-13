import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RoleScreen from '../pages/RoleScreen';
import UserDetailsScreen from '../pages/UserDetailsScreen';
import HomeScreen from '../pages/HomeScreen';

const AppStack = createStackNavigator();

const index = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{header: () => null}}
        name="Roles"
        component={RoleScreen}
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
                onPress={() => navigation.navigate('Roles')}
              />
            </View>
          ),
        })}
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <AppStack.Screen
        options={{header: () => null}}
        name="Home"
        component={HomeScreen}
      />
    </AppStack.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 10,
  },
});
