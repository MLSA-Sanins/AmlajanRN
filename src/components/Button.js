import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {secondary} from '../theme/theme';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.registerButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
