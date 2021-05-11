import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {width, height} from '../utils/dimensions';

export default function GoogleButton() {
  return (
    <TouchableOpacity style={styles.google}>
      <Icon style={styles.googleIcon} name="google" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  google: {
    display: 'flex',
    width: width / 2.5,
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  googleIcon: {
    fontSize: 30,
    color: '#EA4335',
  },
});
