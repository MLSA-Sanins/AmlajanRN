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
import FormInput from '../../components/FormInput';
import Feather from 'react-native-vector-icons/Feather';
import {primary, secondary} from '../../theme/theme';
import {connect} from 'react-redux';
import {registerNewUser} from '../../redux/actions/userActions';
import {updateAddress} from '../../redux/actions/locationActions';
import GradientButton from '../../components/GradientButton';
import DisabledButton from '../../components/DisabledButton';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/Screen';
import providerSchema from '../../utils/providerSchema';
import Errors from '../../components/Errors';
import {Formik} from 'formik';

const UserDetailsScreen = ({
  route,
  navigation,
  userData,
  registerNewUser,
  location,
  updateAddress,
  isLoading,
}) => {
  const {displayName, email, phoneNumber, uid} = userData;

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

  const newUserRegistration = values => {
    updateAddress(values.address);
    const dataSubmit = {
      displayName: values.displayName,
      location: location,
      email: values.email,
      phoneNumber: values.phoneNumber,
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
            ENTER PROVIDER DETAILS
          </Text>
          <View style={styles.picContainer}>
            <Image
              progressiveRenderingEnabled
              style={styles.img}
              source={profile}
            />
          </View>
          <Formik
            validationSchema={providerSchema}
            initialValues={{
              displayName: displayName || '',
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
                  value={values.displayName}
                  onChangeText={handleChange('displayName')}
                  placeholder="Username"
                  icon="user"
                  autoCorrect={false}
                  autoCompleteType="username"
                  keyboardType="default"
                  textContentType="username"
                  autoCapitalize="none"
                  onBlur={handleBlur('displayName')}
                />
                {errors.displayName && touched.displayName && (
                  <Errors texts={errors.displayName} />
                )}
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
                  value={values.phoneNumber}
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
                {errors.phoneNumber && touched.phoneNumber && (
                  <Errors texts={errors.phoneNumber} />
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
                {errors.address && touched.address && (
                  <Errors texts={errors.address} />
                )}

                <Text style={{...styles.text, color: theme.PRIMARY_TEXT_COLOR}}>
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

                {!isValid || isLoading ? (
                  <DisabledButton title="REGISTER" height={50} />
                ) : (
                  <GradientButton
                    title="REGISTER"
                    height={50}
                    onPress={handleSubmit}
                  />
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
