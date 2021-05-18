import styled from 'styled-components';

export const ImgContainer = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  position: absolute;
  left: 20px;
  top: 60px;
  justify-content: center;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  border-width: 1px;
  align-items: center;
`;

export const ProfileThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 35px;
`;

export const ProfileName = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  left: 90px;
  position: absolute;
  top: 80px;
  font-size: 18px;
  line-height: 20px;
  font-family: Montserrat-Regular;
`;
