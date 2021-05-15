import styled from 'styled-components';

export const Page = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
