import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {primary, secondary} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({title, onPress, height}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={[primary.light, primary.main]}
        style={{...styles.button, height: height}}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    minWidth: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});
