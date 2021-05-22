import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  InteractionManager,
} from 'react-native';
import MainStack from '../../navigation/MainStack';
import {connect, useSelector} from 'react-redux';

const MainScreen = ({isLoading}) => {
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
};

const mapStateToProps = state => {
  return {isLoading: state.providers.isLoading};
};

export default connect(mapStateToProps, null)(MainScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
});
