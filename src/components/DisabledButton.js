import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

export default function Button({title, height}) {
  return (
    <TouchableOpacity disabled activeOpacity={0.7}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#ccc', '#ccc']}
        style={{...styles.button, height: verticalScale(height)}}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  button: {
    marginHorizontal: '30@s',
    marginTop: '20@vs',
    borderRadius: '5@vs',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    minWidth: '200@s',
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    fontSize: '22@mvs0.3',
  },
});
