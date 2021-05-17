import styled from 'styled-components';

export const Header = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  margin-left: 30px;
  margin-top: 150px;
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  margin-top: 30px;
  font-size: 15px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  align-self: center;
`;

export const BottomText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;
