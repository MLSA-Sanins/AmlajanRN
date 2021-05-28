import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import styled from 'styled-components';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Buttons = styled.Pressable`
  width: ${scale(100)}px;
  height: ${verticalScale(40)}px;
  background-color: ${props => props.theme.SECONDARY_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export default function ModalButton({onPress, title,color}) {
  return (
    <Buttons onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Buttons>
  );
}

const styles = StyleSheet.create({
  modalButton: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
