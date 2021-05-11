import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {height, width} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {primary} from '../theme/theme';

export default function FormInput({phd, name, ...rest}) {
  return (
    <View style={styles.formContainer}>
      <Icon style={styles.icon} name={name} />
      <TextInput
        placeholderTextColor="#9e9e9e"
        style={styles.textInput}
        placeholder={phd}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    color: primary.main,
  },
});
