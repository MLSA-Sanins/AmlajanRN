import React,{useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import MainStack from '../../navigation/MainStack';
import {useSelector} from 'react-redux';

export default function index() {
  const theme = useSelector(state => state.themes.theme);
  const [statusBarStyle, setStatusBarStyle] = useState(theme.STATUS_BAR_STYLE);
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
