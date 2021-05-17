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
  KeyboardAvoidingView,
} from 'react-native';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Feather from 'react-native-vector-icons/Feather';
import {primary, secondary} from '../../theme/theme';
import {connect} from 'react-redux';
import {registerNewUser} from '../../redux/actions/userActions';
import {updateAddress} from '../../redux/actions/locationActions';
import GradientButton from '../../components/GradientButton';
import {useSelector} from 'react-redux';

const UserDetailsScreen = ({
  route,
  navigation,
  userData,
  registerNewUser,
  location,
  updateAddress,
}) => {
  const [data, setData] = useState({
    userName: userData.displayName,
    address: location.address,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    incentive: false,
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const theme = useSelector(state => state.themes.theme);

  const onEmailChange = val => {
    if (val.length !== 0) {
      setData({...data, email: val, checkTextInputChange: true});
    } else {
      setData({...data, email: val, checkTextInputChange: false});
    }
  };

  const onUserNameChange = val => {
    if (val.length !== 0) {
      setData({...data, userName: val, checkTextInputChange: true});
    } else {
      setData({...data, userName: val, checkTextInputChange: false});
    }
  };

  const onAddressChange = val => {
    if (val.length !== 0) {
      setData({...data, address: val, checkTextInputChange: true});
    } else {
      setData({...data, address: val, checkTextInputChange: true});
    }
  };

  const onPhoneChange = val => {
    if (val.length !== 0) {
      setData({...data, phoneNumber: val, checkTextInputChange: true});
    } else {
      setData({...data, phoneNumber: val, checkTextInputChange: false});
    }
  };

  const onIncentiveChange = val => {
    setData({...data, incentive: val});
  };

  const activeColor = primary.main;
  const inactiveColor = '#9e9e9e';

  const newUserRegistration = () => {
    updateAddress(data.address);
    const dataSubmit = {
      displayName: data.userName,
      location,
      email: data.email,
      phoneNumber: data.phoneNumber,
      incentive: data.incentive,
      uid: userData.uid,
    };
    registerNewUser(route.params.title.toLowerCase(), dataSubmit, navigation);
  };

  return (
    <KeyboardAvoidingView style={styles.topWrapper} behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.title}>
            ENTER {route.params.title.toUpperCase()} DETAILS
          </Text>
          <View style={styles.picContainer}>
            <Image
              progressiveRenderingEnabled
              style={styles.img}
              source={{uri: userData.photoURL}}
            />
          </View>
          <FormInput
            value={data.userName}
            onChangeText={val => onUserNameChange(val)}
            phd="Username"
            name="user"
          />
          {route.params.title.toUpperCase() === 'PROVIDER' && (
            <FormInput
              value={data.email}
              onChangeText={val => onEmailChange(val)}
              phd="Email"
              name="mail"
            />
          )}
          {route.params.title.toUpperCase() === 'PROVIDER' && (
            <FormInput
              value={data.phoneNumber}
              onChangeText={val => onPhoneChange(val)}
              phd="Phone Number"
              name="smartphone"
            />
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
              value={data.address}
              onChangeText={val => onAddressChange(val)}
              style={{...styles.textInput, color: theme.FORM_INPUT_TEXT_COLOR}}
              placeholder="Address"
              placeholderTextColor="#9e9e9e"
            />
          </View>
          {route.params.title.toUpperCase() === 'PROVIDER' && (
            <>
              <Text style={styles.text}>
                Will you charge money from Patients in Need ?
              </Text>
              <View style={styles.incentiveWrapper}>
                <View style={styles.optionWrapper}>
                  <TouchableOpacity
                    onPress={() => onIncentiveChange(true)}
                    style={{
                      ...styles.option,
                      backgroundColor: data.incentive
                        ? activeColor
                        : inactiveColor,
                    }}
                  />
                  <Text style={styles.optionText}>Yes , I will</Text>
                </View>
                <View style={styles.optionWrapper}>
                  <TouchableOpacity
                    onPress={() => onIncentiveChange(false)}
                    style={{
                      ...styles.option,
                      backgroundColor: data.incentive
                        ? inactiveColor
                        : activeColor,
                    }}
                  />
                  <Text style={styles.optionText}>
                    No , I really want to help
                  </Text>
                </View>
              </View>
            </>
          )}
          <GradientButton
            height={50}
            title={
              route.params.title === 'Provider'
                ? 'REGISTER'
                : 'SEARCH PROVIDERS'
            }
            onPress={() => newUserRegistration()}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {userData: state.user.currentUser, location: state.user.location};
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
