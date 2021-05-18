import styled from 'styled-components';

export const ImgContainer = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  position: absolute;
  left: 20px;
  top: -40px;
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
  top: -20px;
  font-size: 18px;
  line-height: 20px;
  font-family: Montserrat-Regular;
`;

export const HomeView = styled.View`
  flex: 1;
  align-items: center;
`;

export const MapView = styled.Pressable`
  width: 90%;
  height: 30%;
  background-color: gray;
  border-radius: 10px;
  top: 40px;
  border-width: 1px;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const MapImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
