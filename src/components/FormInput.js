import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {height, width} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {primary} from '../theme/theme';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const FormContainer = styled.View`
  border-width: 1px;
  margin-vertical: 10px;
  margin-horizontal: 30px;
  border-color: gray;
  border-radius: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.FORM_INPUT_COLOR};
`;

export default function FormInput({icon, ...rest}) {
  const theme = useSelector(state => state.themes.theme);
  return (
    <FormContainer style={styles.formContainer}>
      <Icon
        style={{...styles.icon, color: theme.PRIMARY_BACKGROUND_COLOR}}
        name={icon}
      />
      <TextInput
        placeholderTextColor="#9e9e9e"
        style={{...styles.textInput, color: theme.FORM_INPUT_TEXT_COLOR}}
        {...rest}
      />
    </FormContainer>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },
});
