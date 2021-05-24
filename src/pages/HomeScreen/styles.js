import styled from 'styled-components';
import {width} from '../../utils/dimensions';

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
  height: 25%;
  background-color: gray;
  border-radius: 10px;
  margin-top: 40px;
  border-width: 1px;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const MapImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const DistanceView = styled.View`
  height: 50px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DistanceButtons = styled.TouchableOpacity`
  width: 70px;
  height: 35px;
  background-color: red;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 20px;
  margin-right: 10px; */
  background-color: ${props => props.theme.DISTANCE_BUTTON_COLOR};
`;

export const DistanceText = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 14px;
  /* font-weight: bold; */
  color: ${props => props.theme.DISTANCE_BUTTON_TEXT};
`;

export const ProviderView = styled.View`
  margin-bottom: 95px;
  width: ${width}px;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const ProfileCard = styled.View`
  margin-bottom: 20px;
  width: ${width * 0.9}px;
  height: auto;
  /* background-color: ${props => props.theme.SECONDARY_COLOR}; */
  background-color: gray;
  border-radius: 10px;
  flex-direction: row;
`;

export const ImgView = styled.View`
  width: 90px;
  height: 100%;
`;

export const CardImgContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  /* position: absolute; */
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  border-width: 1px;
  align-items: center;
`;

export const ImgThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;

export const CardDescription = styled.View`
  flex: 1;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

export const CardTitle = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: 16px;
`;

export const ProviderDistance = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: 14px;
`;

export const ProviderAddress = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: 13px;
`;

export const ProviderHeader = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContactNumber = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
`;
