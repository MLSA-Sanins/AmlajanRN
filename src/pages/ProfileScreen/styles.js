import styled from 'styled-components';
import {height, width} from '../../utils/dimensions';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const ProfileView = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImgContainer = styled.View`
  width: ${verticalScale(height * 0.2)}px;
  height: ${verticalScale(height * 0.2)}px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-radius: ${verticalScale(height * 0.1)}px;
  left: ${scale(width) / 2 - verticalScale(height * 0.1)}px;
  top: -${verticalScale(height * 0.12)}px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ProfileThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${verticalScale(height * 0.1)}px;
`;

export const PaddingView = styled.View`
  height: ${verticalScale(height * 0.1)}px;
  width: ${width}px;
  /* background-color: red; */
`;

export const UserName = styled.Text`
  font-size: ${moderateScale(20)}px;
  line-height: ${verticalScale(25)}px;
  font-weight: 800;
  font-family: Montserrat-Regular;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const Address = styled.Text`
  font-size: ${moderateScale(15)}px;
  line-height: ${verticalScale(20)}px;
  margin-top: ${verticalScale(5)}px;
  font-weight: 200;
  font-family: Montserrat-Regular;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const StatsView = styled.View`
  margin-top: ${verticalScale(10)}px;
  width: 80%;
  height: 15%;
  background-color: ${props => props.theme.STATS_VIEW_COLOR};
  border-radius: ${verticalScale(20)}px;
  display: flex;
  flex-direction: row;
  padding-top: ${verticalScale(12)}px;
  padding-bottom: ${verticalScale(12)}px;
`;

export const StatsSection = styled.Pressable`
  flex: 1;
  border-right-color: white;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const LastStatsSection = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
