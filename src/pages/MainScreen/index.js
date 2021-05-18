import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import MainStack from '../../navigation/MainStack';
import {useSelector} from 'react-redux';

export default function index() {
  const theme = useSelector(state => state.themes.theme);
  return (
    <>
      <StatusBar
        backgroundColor={theme.SECONDARY_COLOR}
        barStyle={theme.STATUS_BAR_STYLE}
      />
      <MainStack />
    </>
  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
});
