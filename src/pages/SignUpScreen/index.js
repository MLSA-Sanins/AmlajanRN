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
import {width} from '../../utils/dimensions';
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
import {Formik} from 'formik';
import signupSchema from '../../utils/loginSchema';
import {connect} from 'react-redux';
import Errors from '../../components/Errors';

const SignUpScreen = ({navigation, error}) => {
  const {register, googleLogin, fbLogin} = useContext(AuthContext);

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
        {error.error && <Errors texts={error.error} />}
        <View style={styles.emailCredentials}>
          <Formik
            validationSchema={signupSchema}
            initialValues={{email: '', password: '', confirmPassword: ''}}
            onSubmit={values => register(values.email, values.password)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <FormInput
                  autoCorrect={false}
                  name="mail"
                  phd="Email"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && <Errors texts={errors.email} />}
                <FormInput
                  autoCorrect={false}
                  name="lock"
                  phd="Password"
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && <Errors texts={errors.password} />}
                <FormInput
                  autoCorrect={false}
                  name="lock"
                  phd="Confirm Password"
                  autoCapitalize="none"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && (
                  <Errors texts={errors.confirmPassword} />
                )}
                <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
                  <LinearGradient
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[primary.main, primary.light]}
                    style={styles.button}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}
          </Formik>
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
};

const mapStateToProps = state => {
  return {error: state.error};
};

export default connect(mapStateToProps)(SignUpScreen);

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
    fontFamily: 'Montserrat-Regular',
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
