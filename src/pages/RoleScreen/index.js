import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  InteractionManager,
  ActivityIndicator,
  PermissionsAndroid
} from 'react-native';
import {width, height} from '../../utils/dimensions';
import {primary, secondary} from '../..//theme/theme';
import GradientButton from '../../components/GradientButton';
import {connect} from 'react-redux';
import {askAndFecthLocation} from '../../redux/actions/permissionsActions';

const RoleScreen = ({
  navigation,
  fetchLocationAndAddress,
  askAndFecthLocation,
  isLoading,
}) => {
  // const askPermissions = () => {
  //   askAndFecthLocation();
  // };

  // useEffect(() => {
  //   askAndFecthLocation(PermissionsAndroid);
  //   //return askPermissions;
  // }, []);
  return (
    <View style={styles.Page}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../assets/png/help.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>CHOOSE</Text>
      <Text style={styles.subTitle}>YOUR ROLE</Text>
      <GradientButton
        height={50}
        title="PATIENT"
        onPress={() => navigation.navigate('UserDetails', {title: 'Patient'})}
      />
      <GradientButton
        height={50}
        title="PROVIDER"
        onPress={() => navigation.navigate('UserDetails', {title: 'Provider'})}
      />
    </View>
  );
};

export default connect(null, {
  askAndFecthLocation: askAndFecthLocation,
})(RoleScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  imgContainer: {
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    width: width,
    height: height * 0.5,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: primary.main,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: secondary.button,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 15,
  },
});
