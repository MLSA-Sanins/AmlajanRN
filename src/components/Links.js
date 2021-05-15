import React from 'react';
import styled from 'styled-components';

const TouchLink = styled.TouchableOpacity`
  line-height: 10px;
`;
const Link = styled.Text`
  margin-left: 5px;
  color: ${props => props.theme.LINKS_COLOR};
`;

export default function Links({onPress, children}) {
  return (
    <TouchLink onPress={onPress}>
      <Link>{children}</Link>
    </TouchLink>
  );
}
