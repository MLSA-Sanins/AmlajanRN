import React from 'react';
import styled from 'styled-components';

const HeaderView = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
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
    <HeaderView style={{height}}>
      <ButtonLeft>{children[0]}</ButtonLeft>
      <ButtonRight>{children[1]}</ButtonRight>
    </HeaderView>
  );
}