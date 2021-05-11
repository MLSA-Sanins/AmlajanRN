import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {width, height} from '../../utils/dimensions';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import FormInput from '../../components/FormInput';
import {primary} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function SignUpScreen({navigation}) {
  const [email, changeEmail] = useState();
  const [password, changePassword] = useState();
  const [confirmPassword, changeConfirmPassword] = useState();

  return (
    <View style={styles.Page}>
      <Text style={styles.header}>SIGN UP</Text>
      <Text style={styles.subtitle}>
        Sign up with one of the following options.
      </Text>
      <View style={styles.oAuth}>
        <GoogleButton />
        <FacebookButton />
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
        <TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
