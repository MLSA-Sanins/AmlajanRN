import styled from 'styled-components';
import {height, width} from '../../utils/dimensions';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {PixelRatio} from 'react-native';

export const ImgContainer = styled.View`
  width: ${verticalScale(height * 0.08)}px;
  height: ${verticalScale(height * 0.08)}px;
  border-radius: ${verticalScale(height * 0.04)}px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  position: absolute;
  left: ${scale(width * 0.04)}px;
  top: -${verticalScale(height * 0.05)}px;
  justify-content: center;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  border-width: ${verticalScale(1)}px;
  align-items: center;
`;

export const ProfileThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${verticalScale(height * 0.04)}px;
`;

export const ProfileName = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  left: ${scale(width * 0.22)}px;
  position: absolute;
  top: -${verticalScale(20)}px;
  font-size: ${verticalScale(15)}px;
  line-height: ${verticalScale(20)}px;
  font-family: Montserrat-Regular;
`;

export const HomeView = styled.View`
  flex: 1;
  align-items: center;
`;

export const MapView = styled.Pressable`
  width: 90%;
  height: ${verticalScale(height * 0.22)}px;
  background-color: gray;
  border-radius: ${verticalScale(10)}px;
  margin-top: ${verticalScale(40)}px;
  border-width: ${scale(1)}px;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const MapImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${verticalScale(10)}px;
`;

export const DistanceView = styled.View`
  height: ${verticalScale(50)}px;
  margin-top: ${verticalScale(25)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DistanceButtons = styled.TouchableOpacity`
  width: ${scale(70)}px;
  height: ${verticalScale(35)}px;
  background-color: red;
  border-radius: ${scale(5)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 20px;
  margin-right: 10px; */
  background-color: ${props => props.theme.DISTANCE_BUTTON_COLOR};
`;

export const DistanceText = styled.Text`
  font-family: Montserrat-Regular;
  font-size: ${moderateScale(14)}px;
  /* font-weight: bold; */
  color: ${props => props.theme.DISTANCE_BUTTON_TEXT};
`;

export const ProviderView = styled.View`
  margin-bottom: ${verticalScale(95)}px;
  width: ${width}px;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const ProfileCard = styled.View`
  margin-bottom: ${verticalScale(20)}px;
  width: ${width * 0.9}px;
  height: auto;
  align-items: stretch;
  background-color: ${props => props.theme.CARD_BACKGROUND_COLOR};
  border-radius: ${verticalScale(20)}px;
  flex-direction: row;
  border-width: ${verticalScale(2)}px;
  border-color: ${props => props.theme.CARD_BORDER_COLOR};
`;

export const ImgView = styled.View`
  width: ${scale(90)}px;
  height: 100%;
`;

export const CardImgContainer = styled.View`
  width: ${scale(80)}px;
  height: ${scale(80)}px;
  border-radius: ${verticalScale(40)}px;
  /* background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}; */
  /* position: absolute; */
  margin-left: ${scale(10)}px;
  margin-top: ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(10)}px;
  justify-content: center;
  /* border-color: ${props => props.theme.PRIMARY_TEXT_COLOR}; */
  /* border-width: ${verticalScale(1)}px; */
  align-items: center;
`;

export const ImgThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${verticalScale(40)}px;
`;

export const ImgSubstitute = styled.Image`
  width: ${PixelRatio.getPixelSizeForLayoutSize(40)}px;
  height: ${PixelRatio.getPixelSizeForLayoutSize(40)}px;
  /* border-radius: ${verticalScale(40)}px; */
`;

export const CardDescription = styled.View`
  flex: 1;
  border-radius: ${verticalScale(10)}px;
  display: flex;
  padding: ${scale(10)}px;
  flex-direction: column;
`;

export const CardTitle = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: ${moderateScale(16)}px;
`;

export const ProviderDistance = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: ${moderateScale(14)}px;
`;

export const ProviderAddress = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: ${moderateScale(13)}px;
`;

export const ProviderHeader = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  font-size: ${moderateScale(10)}px;
  margin-top: ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(10)}px;
`;

export const ContactNumber = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-family: Montserrat-Regular;
  margin-bottom: ${verticalScale(10)}px;
  font-size: ${moderateScale(12)}px;
  font-weight: bold;
`;
