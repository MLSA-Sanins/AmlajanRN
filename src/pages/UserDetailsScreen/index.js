import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  InteractionManager,
  TouchableWithoutFeedback,
  PixelRatio,
  KeyboardAvoidingView,
} from 'react-native';
import getPicDimension from '../../utils/getPicDimensions';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Feather from 'react-native-vector-icons/Feather';
import {primary, secondary} from '../../theme/theme';
import {connect} from 'react-redux';
import {registerNewUser} from '../../redux/actions/userActions';
import {updateAddress} from '../../redux/actions/locationActions';
import GradientButton from '../../components/GradientButton';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/Screen';
import userDetailsSchema from '../../utils/userDetailsSchema';
import Errors from '../../components/Errors';

const UserDetailsScreen = ({
  route,
  navigation,
  userData,
  registerNewUser,
  location,
  updateAddress,
  isLoading,
}) => {
  const [userName, email, phoneNumber, uid] = userData;

  const [incentive, setIncentive] = useState(false);

  const theme = useSelector(state => state.themes.theme);

  const activeColor = primary.main;
  const inactiveColor = '#cccccc';

  //size of image container
  const size = 120;
  const profile = {
    uri: `${userData.photoURL}?height=${getPicDimension(size, size)}`,
    width: size,
    height: size,
  };

  const newUserRegistration = ({userName, address, email, phoneNumber}) => {
    updateAddress(address);
    const dataSubmit = {
      displayName: userName,
      location: location,
      email: email,
      phoneNumber: phoneNumber,
      incentive: incentive,
      uid: uid,
    };
    registerNewUser(route.params.title.toLowerCase(), dataSubmit, navigation);
  };

  return (
    <Screen style={styles.topWrapper} behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <View>
          <Text style={{...styles.title, color: theme.PRIMARY_TEXT_COLOR}}>
            ENTER {route.params.title.toUpperCase()} DETAILS
          </Text>
          <View style={styles.picContainer}>
            <Image
              progressiveRenderingEnabled
              style={styles.img}
              source={profile}
            />
          </View>
          <Formik
            validationSchema={userDetailsSchema}
            initialValues={{
              userName: userName || '',
              address: location.address || '',
              email: email,
              phoneNumber: phoneNumber || '',
            }}
            onSubmit={values => newUserRegistration(values)}
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
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  placeholder="Username"
                  icon="user"
                  autoCorrect={false}
                  autoCompleteType="username"
                  keyboardType="default"
                  textContentType="username"
                  autoCapitalize="none"
                  onBlur={handleBlur('userName')}
                />
                {values.userName.length !== 0 &&
                  errors.userName &&
                  touched.userName && <Errors texts={errors.userName} />}
                {route.params.title.toUpperCase() === 'PROVIDER' && (
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
                    {values.email.length !== 0 &&
                      errors.email &&
                      touched.email && <Errors texts={errors.email} />}
                    <FormInput
                      value={value.phoneNumber}
                      placeholder="Phone Number"
                      icon="smartphone"
                      onChangeText={handleChange('phoneNumber')}
                      autoCorrect={false}
                      autoCompleteType="tel"
                      keyboardType="number-pad"
                      textContentType="telephoneNumber"
                      autoCapitalize="none"
                      onBlur={handleBlur('phoneNumber')}
                    />
                    {values.phoneNumber.length !== 0 &&
                      errors.phoneNumber &&
                      touched.phoneNumber && (
                        <Errors texts={errors.phoneNumber} />
                      )}
                  </>
                )}
                <View
                  style={{
                    ...styles.formContainerAddress,
                    backgroundColor: theme.FORM_INPUT_COLOR,
                  }}>
                  <Feather
                    style={{...styles.icon, color: theme.FORM_INPUT_TEXT_COLOR}}
                    name="map"
                  />
                  <TextInput
                    multiline
                    numberOfLines={4}
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    style={{
                      ...styles.textInput,
                      color: theme.FORM_INPUT_TEXT_COLOR,
                    }}
                    placeholder="Address"
                    placeholderTextColor={inactiveColor}
                    autoCorrect={false}
                    autoCompleteType="street-address"
                    keyboardType="default"
                    textContentType="fullStreetAddress"
                    autoCapitalize="none"
                  />
                </View>
                {values.address.length !== 0 &&
                  errors.address &&
                  touched.address && <Errors texts={errors.address} />}
                {route.params.title.toUpperCase() === 'PROVIDER' && (
                  <>
                    <Text
                      style={{...styles.text, color: theme.PRIMARY_TEXT_COLOR}}>
                      Will you charge money from Patients in Need ?
                    </Text>
                    <View style={styles.incentiveWrapper}>
                      <View style={styles.optionWrapper}>
                        <TouchableOpacity
                          onPress={() => setIncentive(true)}
                          style={{
                            ...styles.option,
                            backgroundColor: incentive
                              ? activeColor
                              : inactiveColor,
                          }}
                        />
                        <Text
                          style={{
                            ...styles.optionText,
                            color: theme.PRIMARY_TEXT_COLOR,
                          }}>
                          Yes , I will
                        </Text>
                      </View>
                      <View style={styles.optionWrapper}>
                        <TouchableOpacity
                          onPress={() => setIncentive(false)}
                          style={{
                            ...styles.option,
                            backgroundColor: incentive
                              ? inactiveColor
                              : activeColor,
                          }}
                        />
                        <Text
                          style={{
                            ...styles.optionText,
                            color: theme.PRIMARY_TEXT_COLOR,
                          }}>
                          No , I really want to help
                        </Text>
                      </View>
                    </View>
                  </>
                )}
                {!isValid || isLoading ? (
                  <TouchableOpacity disabled>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 1}}
                      colors={[inactiveColor, inactiveColor]}
                      style={styles.button}>
                      <Text style={styles.buttonText}>
                        {route.params.title === 'Provider'
                          ? 'REGISTER'
                          : 'SEARCH PROVIDERS'}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={handleSubmit}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 1}}
                      colors={[primary.main, primary.light]}
                      style={styles.button}>
                      <Text style={styles.buttonText}>
                        {route.params.title === 'Provider'
                          ? 'REGISTER'
                          : 'SEARCH PROVIDERS'}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </>
            )}
          </Formik>
        </View>
      </Pressable>
    </Screen>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user.currentUser,
    location: state.user.currentUser.location,
    isLoading: state.user.isLoading,
  };
};

export default connect(mapStateToProps, {
  registerNewUser: registerNewUser,
  updateAddress: updateAddress,
})(UserDetailsScreen);

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
  },
  formContainer: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderRadius: 5,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  formContainerAddress: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderRadius: 5,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },
  picContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  text: {
    marginHorizontal: 30,
    textAlign: 'center',
  },
  incentiveWrapper: {
    display: 'flex',
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionWrapper: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  optionText: {
    paddingLeft: 10,
  },
});
