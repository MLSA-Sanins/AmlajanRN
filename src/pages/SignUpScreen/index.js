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
import signupSchema from '../../utils/signupSchema';
import {connect} from 'react-redux';
import Errors from '../../components/Errors';
import GradientButton from '../../components/GradientButton';
import DisabledButton from '../../components/DisabledButton';
import {ScaledSheet} from 'react-native-size-matters';

const SignUpScreen = ({navigation, error, isLoading}) => {
  const {register, googleLogin, fbLogin} = useContext(AuthContext);

  const theme = useSelector(state => state.themes.theme);

  return (
    <Screen behavior="height" style={styles.Page}>
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
            onSubmit={values => register(values.email, values.password)}
            validateOnMount>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <>
                <FormInput
                  autoCorrect={false}
                  icon="mail"
                  placeholder="Email"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {values.email.length !== 0 && errors.email && touched.email && (
                  <Errors texts={errors.email} />
                )}
                <FormInput
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  autoCompleteType="password"
                  keyboardType="default"
                  textContentType="newPassword"
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {values.password.length !== 0 &&
                  errors.password &&
                  touched.password && <Errors texts={errors.password} />}
                <FormInput
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Confirm Password"
                  autoCompleteType="password"
                  keyboardType="default"
                  textContentType="newPassword"
                  autoCapitalize="none"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {values.confirmPassword.length !== 0 &&
                  errors.confirmPassword &&
                  touched.confirmPassword && (
                    <Errors texts={errors.confirmPassword} />
                  )}
                {!isValid || isLoading ? (
                  <DisabledButton title="SIGN UP" height={50} />
                ) : (
                  <GradientButton
                    onPress={handleSubmit}
                    title="SIGN UP"
                    height={50}
                  />
                )}
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
  return {error: state.error, isLoading: state.user.isLoading};
};

export default connect(mapStateToProps)(SignUpScreen);

const styles = ScaledSheet.create({
  Page: {
    justifyContent: 'center',
  },
  oAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '30@vs',
    paddingHorizontal: '15@s',
    width: width,
    borderRadius: '20@vs',
  },
  button: {
    marginHorizontal: '30@s',
    //marginTop: 30,
    borderRadius: '5@vs',
    height: '60@vs',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: '22@mvs0.3',
    fontFamily: 'Montserrat-Regular',
  },
  bottomView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10@vs',
  },
  Logo: {
    alignSelf: 'center',
  },
});
