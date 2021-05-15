import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Keyboard,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormInput from '../../components/FormInput';
import GoogleButton from '../../components/GoogleButton';
import FacebookButton from '../../components/FacebookButton';
import {primary} from '../../theme/theme';
import {width, height} from '../../utils/dimensions';
import {AuthContext} from '../../context/AuthProvider';
import {Screen} from '../../components/Screen';
import {Header, SubTitle, BottomText} from './styles';
import Links from '../../components/Links';
import {useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const [email, changeEmail] = useState();
  const [password, changePassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const theme = useSelector(state => state.themes.theme);

  return (
    <Screen behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <StatusBar
          backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
          barStyle={theme.STATUS_BAR_STYLE}
        />
        <Header>LOGIN</Header>
        <SubTitle>Log In with one of the following options.</SubTitle>
        <View style={styles.oAuth}>
          <GoogleButton onPress={() => googleLogin()} />
          <FacebookButton onPress={() => fbLogin()} />
        </View>
        <View style={styles.emailCredentials}>
          <FormInput
            value={email}
            onChangeText={changeEmail}
            autoCorrect={false}
            name="mail"
            phd="Email"
            autoCapitalize="none"
          />
          <FormInput
            value={password}
            onChangeText={changePassword}
            secureTextEntry={true}
            autoCorrect={false}
            name="lock"
            phd="Password"
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => login(email, password)}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={[primary.main, primary.light]}
              style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <BottomText>Don't have an account?</BottomText>
            <Links onPress={() => navigation.navigate('Signup')}>Sign Up</Links>
          </View>
          <View style={styles.bottomView}>
            <Links onPress={() => navigation.navigate('PrivacyPolicy')}>
              Privacy Policy
            </Links>
          </View>
        </View>
      </Pressable>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
  },
  header: {
    marginLeft: 30,
    marginTop: 150,
    fontSize: 30,
    fontWeight: 'bold',
    color: primary.main,
  },
  subtitle: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 15,
  },
  oAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: width,
    borderRadius: 20,
  },
  emailCredentials: {},
  label: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    color: 'gray',
  },
  button: {
    marginHorizontal: 30,
    marginTop: 30,
    borderRadius: 5,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
  bottomView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bottomText: {},
  signUpLink: {
    lineHeight: 10,
  },
  link: {
    marginLeft: 5,
    color: primary.main,
  },
});
