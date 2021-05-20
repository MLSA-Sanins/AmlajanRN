import React from 'react';
import styled from 'styled-components';

const ErrorView = styled.View`
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const ErrorText = styled.Text`
  font-family: Montserrat-Regular;
  color: red;
  font-size: 10px;
`;

const Errors = ({texts}) => {
  return (
    <ErrorView>
      <ErrorText>{texts}</ErrorText>
    </ErrorView>
  );
};

export default Errors;
