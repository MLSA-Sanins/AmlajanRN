import React from 'react';
import styled from 'styled-components';
import {scale, moderateScale} from 'react-native-size-matters';

const ErrorView = styled.View`
  align-items: center;
  margin-left: ${scale(30)}px;
  margin-right: ${scale(30)}px;
`;

const ErrorText = styled.Text`
  font-family: Montserrat-Regular;
  color: red;
  font-size: ${moderateScale(10)}px;
`;

const Errors = ({texts}) => {
  return (
    <ErrorView>
      <ErrorText>{texts}</ErrorText>
    </ErrorView>
  );
};

export default Errors;
