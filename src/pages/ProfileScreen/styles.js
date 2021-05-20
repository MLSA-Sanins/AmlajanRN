import styled from 'styled-components';
import {width} from '../../utils/dimensions';

export const ProfileView = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImgContainer = styled.View`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-radius: 75px;
  /* border-width: 1px;
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR}; */
  left: ${width / 2 - 75}px;
  top: -90px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ProfileThumbnail = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 75px;
`;

export const PaddingView = styled.View`
  height: 80px;
  width: ${width}px;
  /* background-color: red; */
`;

export const UserName = styled.Text`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  font-family: Montserrat-Regular;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const StatsView = styled.View`
  margin-top: 10px;
  width: 80%;
  height: 15%;
  background-color: ${props => props.theme.STATS_VIEW_COLOR};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatsSection = styled.View`
  flex: 1;
  border-right-color: white;
  border-right-width: 1px;
  justify-content:center;
  align-items:center;
`;

export const LastStatsSection = styled.View`
  flex: 1;
  justify-content:center;
  align-items:center;
`;
