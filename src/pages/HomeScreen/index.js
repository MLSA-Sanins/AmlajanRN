import React, {useContext} from 'react';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';
import GradientButton from '../../components/GradientButton';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import { Page } from './styles';
import { Screen } from "../../components/Screen";
import {switchTheme} from '../../redux/actions/themeActions';

const StyledButton = styled.TouchableOpacity``;

const HomeScreen = ({theme, switchTheme}) => {
  const switchThemes = () => {
    theme.mode === 'light' ? switchTheme(darkTheme) : switchTheme(lightTheme);
  };

  return (
    <Screen>
      <Text>{theme.mode}</Text>
      <GradientButton
        title={`${theme.mode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}`}
        height={50}
        onPress={() => switchThemes()}
      />
    </Screen>
  );
};

const mapStateToProps = state => {
  return {theme: state.themes.theme};
};

export default connect(mapStateToProps, {
  switchTheme: switchTheme,
})(HomeScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
