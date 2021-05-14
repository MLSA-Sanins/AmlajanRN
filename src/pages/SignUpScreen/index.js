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
} from 'react-native';
import {width, height} from '../../utils/dimensions';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import FormInput from '../../components/FormInput';
import {primary} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../context/AuthProvider';

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

  return (
    <KeyboardAvoidingView style={styles.topWrapper} behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <Text style={styles.header}>SIGN UP</Text>
        <Text style={styles.subtitle}>
          Sign up with one of the following options.
        </Text>
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
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.signUpLink}>
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}
              style={styles.signUpLink}>
              <Text style={styles.link}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
  },
  Page: {
    flex: 1,
  },
  header: {
    marginLeft: 30,
    marginTop: 50,
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
