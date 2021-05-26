import React from 'react';
import styled from 'styled-components';
import {scale, verticalScale} from 'react-native-size-matters';

const HeaderView = styled.View`
  padding-left: ${scale(10)}px;
  padding-right: ${scale(10)}px;
  padding-top: ${verticalScale(10)}px;
  justify-content: space-between;
  background-color: ${props => props.theme.SECONDARY_COLOR};
  flex-direction: row;
`;

const ButtonLeft = styled.View`
  align-items: flex-end;
`;

const ButtonRight = styled.View`
  align-items: flex-start;
`;

export default function AppNavigationHeader({children, height}) {
  return (
    <HeaderView style={{height: verticalScale(height)}}>
      <ButtonLeft>{children[0]}</ButtonLeft>
      <ButtonRight>{children[1]}</ButtonRight>
    </HeaderView>
  );
}
