import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  InteractionManager,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import FormInput from '../../components/FormInput';
import Icon from 'react-native-vector-icons';
import {primary, secondary} from '../../theme/theme';

const UserDetailsScreen = ({route, user}) => {
  const [userName, setUserName] = useState('');
  const [address, changeAddress] = useState('');
  return (
    <>
      <KeyboardAvoidingView style={styles.topWrapper} behavior="height">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <Text style={styles.title}>
              ENTER {route.params.title.toUpperCase()} DETAILS
            </Text>
            <View style={styles.picContainer}>
              <Image
                progressiveRenderingEnabled
                style={styles.img}
                source={{uri: user.currentUser.picture.data.url}}
              />
            </View>
            <View style={styles.formContainer}>
              <Icon style={styles.icon} name="user" />
              <TextInput
                value={userName}
                onChangeText={setUserName}
                style={styles.textInput}
                placeholder="Username"
              />
            </View>
            {route.params.title.toUpperCase() === 'PROVIDER' && (
              <FormInput phd="Email" name="mail" />
            )}
            {route.params.title.toUpperCase() === 'PROVIDER' && (
              <FormInput phd="Phone Number" name="smartphone" />
            )}
            <View style={styles.formContainerAddress}>
              <Icon style={styles.icon} name="map" />
              <TextInput
                multiline
                numberOfLines={4}
                value={address}
                onChangeText={changeAddress}
                style={styles.textInput}
                placeholder="Address"
              />
            </View>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.buttonText}>
                {route.params.title === 'Provider'
                  ? 'REGISTER'
                  : 'SEARCH PROVIDERS'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
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
    height: 100,
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
    color: primary.main,
  },
  location: {
    justifyContent: 'center',
    backgroundColor: primary.main,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  mapPin: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  picContainer: {
    marginTop: 30,
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
  registerButton: {
    backgroundColor: secondary.button,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
