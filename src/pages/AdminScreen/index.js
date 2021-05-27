import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  InteractionManager,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {Screen} from '../../components/Screen';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {height, width} from '../../utils/dimensions';

const AdminScreen = ({navigation}) => {
  const theme = useSelector(state => state.themes.theme);
  return (
    <Screen>
      <AppNavigationHeader height={height * 0.1}>
        <></>
        <AntDesign.Button
          name="home"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Home')}
        />
      </AppNavigationHeader>
    </Screen>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
