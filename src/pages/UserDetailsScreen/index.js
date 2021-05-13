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
import GradientButton from '../../components/GradientButton';

const UserDetailsScreen = ({route, navigation}) => {
  const [userName, setUserName] = useState('');
  const [address, changeAddress] = useState('');
  const [incentive, setIncentive] = useState(false);

  // const { user } = useContext(AuthContext);
  // console.log(user);

  const activeColor = primary.main;
  const inactiveColor = '#9e9e9e';
  return (
    <KeyboardAvoidingView style={styles.topWrapper} behavior="height">
      <Pressable onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.title}>
            ENTER {route.params.title.toUpperCase()} DETAILS
          </Text>
          <View style={styles.picContainer}>
            {/* <Image
                progressiveRenderingEnabled
                style={styles.img}
                source={{uri: user.currentUser.picture.data.url}}
              /> */}
          </View>
          <FormInput
            value={userName}
            onChangeText={setUserName}
            phd="Username"
            name="user"
          />
          {route.params.title.toUpperCase() === 'PROVIDER' && (
            <FormInput phd="Email" name="mail" />
          )}
          {route.params.title.toUpperCase() === 'PROVIDER' && (
            <FormInput phd="Phone Number" name="smartphone" />
          )}
          <View style={styles.formContainerAddress}>
            <Feather style={styles.icon} name="map" />
            <TextInput
              multiline
              numberOfLines={4}
              value={address}
              onChangeText={changeAddress}
              style={styles.textInput}
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
                    onPress={() => setIncentive(true)}
                    style={{
                      ...styles.option,
                      backgroundColor: incentive ? activeColor : inactiveColor,
                    }}
                  />
                  <Text style={styles.optionText}>Yes , I will</Text>
                </View>
                <View style={styles.optionWrapper}>
                  <TouchableOpacity
                    onPress={() => setIncentive(false)}
                    style={{
                      ...styles.option,
                      backgroundColor: incentive ? inactiveColor : activeColor,
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
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default UserDetailsScreen;

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
