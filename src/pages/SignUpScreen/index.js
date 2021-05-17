import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {width, height} from '../../utils/dimensions';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import FormInput from '../../components/FormInput';
import {primary} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../context/AuthProvider';
import {Screen} from '../../components/Screen';
import {SubTitle, BottomText} from '../LoginScreen/styles';
import Links from '../../components/Links';
import {useSelector} from 'react-redux';
import AmlajanLogo from '../../assets/svgcodes/AmlajanLogo';

export default function SignUpScreen({navigation}) {
  const [email, changeEmail] = useState();
  const [password, changePassword] = useState();
  const [confirmPassword, changeConfirmPassword] = useState();

  const {register, googleLogin, fbLogin} = useContext(AuthContext);

  const onClickSignUp = () => {
    if (password === confirmPassword) {
      register(email, password);
    } else {
      console.warn('Passwords donot Match!');
    }
  };

  const theme = useSelector(state => state.themes.theme);

  return (
    <Screen behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <StatusBar
          backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
          barStyle={theme.STATUS_BAR_STYLE}
        />
        <AmlajanLogo style={styles.Logo} />
        <SubTitle>Sign up with one of the following options.</SubTitle>
        <View style={styles.oAuth}>
          {Platform.OS ? (
            <>
              <GoogleButton onPress={() => googleLogin()} />
              <FacebookButton onPress={() => fbLogin()} />
            </>
          ) : null}
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
          <FormInput
            value={confirmPassword}
            onChangeText={changeConfirmPassword}
            secureTextEntry={true}
            autoCorrect={false}
            name="lock"
            phd="Confirm Password"
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => onClickSignUp()}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={[primary.main, primary.light]}
              style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <BottomText>Already have an account?</BottomText>
            <Links onPress={() => navigation.navigate('Login')}>Log In</Links>
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
}

const styles = StyleSheet.create({
  oAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: width,
    borderRadius: 20,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 30,
    borderRadius: 5,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  Logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
