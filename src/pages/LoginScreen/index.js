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
import GradientButton from '../../components/GradientButton';
import DisabledButton from '../../components/DisabledButton';
import FormInput from '../../components/FormInput';
import GoogleButton from '../../components/GoogleButton';
import FacebookButton from '../../components/FacebookButton';
import {primary} from '../../theme/theme';
import {width, height} from '../../utils/dimensions';
import {AuthContext} from '../../context/AuthProvider';
import {Screen} from '../../components/Screen';
import {SubTitle, BottomText} from './styles';
import Links from '../../components/Links';
import {useSelector} from 'react-redux';
import AmlajanLogo from '../../assets/svgcodes/AmlajanLogo';
import {Formik} from 'formik';
import loginSchema from '../../utils/loginSchema';
import {connect} from 'react-redux';
import Errors from '../../components/Errors';
import {ScaledSheet} from 'react-native-size-matters';

const LoginScreen = ({navigation, error, isLoading}) => {
  // const [email, changeEmail] = useState();
  // const [password, changePassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const theme = useSelector(state => state.themes.theme);

  return (
    <Screen behavior="height" style={styles.Page}>
      <Pressable onPress={Keyboard.dismiss}>
        <StatusBar
          backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
          barStyle={theme.STATUS_BAR_STYLE}
        />
        <AmlajanLogo style={styles.Logo} />
        <SubTitle>Log In with one of the following options.</SubTitle>
        <View style={styles.oAuth}>
          <GoogleButton disabled={isLoading} onPress={() => googleLogin()} />
          <FacebookButton disabled={isLoading} onPress={() => fbLogin()} />
        </View>
        {error.error && <Errors texts={error.error} />}
        <View style={styles.emailCredentials}>
          <Formik
            validationSchema={loginSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => login(values.email, values.password)}
            validateOnMount>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <FormInput
                  icon="mail"
                  autoCorrect={false}
                  // autoCompleteType="email"
                  // textContentType="emailAddress"
                  placeholder="Email"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Errors texts={errors.email} />
                )}
                <FormInput
                  icon="lock"
                  autoCorrect={false}
                  placeholder="Password"
                  autoCompleteType="password"
                  keyboardType="default"
                  textContentType="password"
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Errors texts={errors.password} />
                )}
                {!isValid || isLoading ? (
                  <DisabledButton title="LOGIN" height={50} />
                ) : (
                  <GradientButton
                    onPress={handleSubmit}
                    title="LOGIN"
                    height={50}
                  />
                )}
              </>
            )}
          </Formik>
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

const mapStateToProps = state => {
  return {error: state.error, isLoading: state.user.isLoading};
};

export default connect(mapStateToProps, {})(LoginScreen);

const styles = ScaledSheet.create({
  Page: {
    justifyContent: 'center',
  },
  subtitle: {
    marginLeft: '30@s',
    marginTop: '30@vs',
    fontSize: '15@ms0.3',
  },
  oAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '30@vs',
    paddingHorizontal: '15@s',
    width: width,
  },
  button: {
    marginHorizontal: '30@s',
    marginTop: '30@vs',
    borderRadius: '5@vs',
    height: '50@vs',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
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
