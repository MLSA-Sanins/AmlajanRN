import React, {useContext} from 'react';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';
import GradientButton from '../../components/GradientButton';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {Screen} from '../../components/Screen';
import {switchTheme} from '../../redux/actions/themeActions';
import {useSelector} from 'react-redux';

import AppNavigationHeader from '../../components/AppNavigationHeader';

const StyledButton = styled.TouchableOpacity``;

const HomeScreen = ({switchTheme}) => {
  const theme = useSelector(state => state.themes.theme);
  const switchThemes = () => {
    theme.mode === 'light' ? switchTheme(darkTheme) : switchTheme(lightTheme);
  };

  return (
    <Screen>
      <StatusBar
        backgroundColor={theme.SECONDARY_COLOR}
        barStyle={theme.STATUS_BAR_STYLE}
      />
      <AppNavigationHeader />
      <Text>{theme.mode}</Text>
      <GradientButton
        title={`${theme.mode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}`}
        height={50}
        onPress={() => switchThemes()}
      />
    </Screen>
  );
};

export default connect(null, {
  switchTheme: switchTheme,
})(HomeScreen);
