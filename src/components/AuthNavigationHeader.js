import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const HeaderView = styled.View`
  margin-left: 10px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

export default function AuthNavigationHeader({onPress}) {
  const theme = useSelector(state => state.themes.theme);
  console.log(theme);
  return (
    <HeaderView>
      <FontAwesome.Button
        name="long-arrow-left"
        size={25}
        backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
        color={theme.PRIMARY_TEXT_COLOR}
        onPress={onPress}
      />
    </HeaderView>
  );
}
