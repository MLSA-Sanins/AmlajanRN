import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const HeaderView = styled.View`
  padding-left: 10px;
  height: 100px;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.SECONDARY_COLOR};
`;

export default function AppNavigationHeader({onPress}) {
  const theme = useSelector(state => state.themes.theme);
  console.log(theme);
  return (
    <HeaderView>
      <AntDesign.Button
        name="user"
        size={25}
        backgroundColor={theme.SECONDARY_COLOR}
        color={theme.PRIMARY_TEXT_COLOR}
        onPress={onPress}
      />
    </HeaderView>
  );
}
