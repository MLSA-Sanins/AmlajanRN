import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

import RoleScreen from '../pages/RoleScreen';
import UserDetailsScreen from '../pages/UserDetailsScreen';
import MainScreen from '../pages/MainScreen';
import LoadingView from '../components/LoadingView';

const AppStack = createStackNavigator();

const AppStacks = ({isRegistered}) => {
  let routeName;
  const theme = useSelector(state => state.themes.theme);

  if (isRegistered === null) {
    return <LoadingView />;
  } else if (isRegistered) {
    routeName = 'Main';
  } else {
    routeName = 'Roles';
  }
  return (
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen
        options={{header: () => null}}
        name="Roles"
        component={RoleScreen}
      />
      <AppStack.Screen
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={styles.headerStyle}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
                color={theme.PRIMARY_TEXT_COLOR}
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
        name="Main"
        component={MainScreen}
      />
    </AppStack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    isRegistered: state.user.isRegisteredUser,
    //isAdmin: state.user.currentUser.email,
  };
};

export default connect(mapStateToProps, {})(AppStacks);

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 10,
  },
});
