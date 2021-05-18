import React, {useContext} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {Screen} from '../../components/Screen';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {switchTheme} from '../../redux/actions/themeActions';
import {connect} from 'react-redux';
import {AuthContext} from '../../context/AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import GradientButton from '../../components/GradientButton';

const ProfileScreen = ({navigation, switchTheme}) => {
  const theme = useSelector(state => state.themes.theme);
  const {logout} = useContext(AuthContext);
  const switchThemes = () => {
    theme.mode === 'light' ? switchTheme(darkTheme) : switchTheme(lightTheme);
  };
  return (
    <Screen>
      <AppNavigationHeader height={200}>
        <AntDesign.Button
          name="back"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Maps')}
        />
        <></>
      </AppNavigationHeader>
      <Text>PRROFILE SCREEN</Text>
      <GradientButton
        title={`${theme.mode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}`}
        height={50}
        onPress={() => switchThemes()}
      />
      <GradientButton title="LOG OUT" height={50} onPress={() => logout()} />
    </Screen>
  );
};

const mapStateToProps = state => {
  return {userData: state.user.currentUser};
};

export default connect(mapStateToProps, {
  switchTheme: switchTheme,
})(ProfileScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
