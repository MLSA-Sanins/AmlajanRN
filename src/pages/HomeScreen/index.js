import React, {useContext} from 'react';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  PixelRatio,
} from 'react-native';
import {
  ImgContainer,
  ProfileThumbnail,
  ProfileName,
  HomeView,
  MapView,
  MapImage,
} from './styles';
import getPicDimension from '../../utils/getPicDimensions';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';
import GradientButton from '../../components/GradientButton';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {Screen} from '../../components/Screen';
import {switchTheme} from '../../redux/actions/themeActions';
import {useSelector} from 'react-redux';
import LoadingView from '../../components/LoadingView';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppNavigationHeader from '../../components/AppNavigationHeader';

const StyledButton = styled.TouchableOpacity``;

const HomeScreen = ({navigation, switchTheme, userData}) => {
  const theme = useSelector(state => state.themes.theme);
  //size of image container
  const size = 65;
  //calculating right dimension to be fetched
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(size),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(size),
  };
  const profile = {
    uri: `${userData.photoURL}?height=${picDimension.picHeight}`,
    width: size,
    height: size,
  };

  return (
    <Screen>
      <AppNavigationHeader height={100}>
        <></>
        <AntDesign.Button
          name="find"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Maps')}
        />
      </AppNavigationHeader>
      <HomeView>
        <ImgContainer style={styles.profile}>
          {userData.photoURL ? (
            <ProfileThumbnail progressiveRenderingEnabled source={profile} />
          ) : (
            <AntDesign name="user" size={30} color={theme.PRIMARY_TEXT_COLOR} />
          )}
        </ImgContainer>
        <ProfileName>Hi ! {userData.displayName}</ProfileName>
        <MapView onPress={()=>navigation.navigate('Maps')}>
          <MapImage source={require('../../assets/maps.jpg')}/>
        </MapView>
      </HomeView>
    </Screen>
  );
};
const mapStateToProps = state => {
  return {userData: state.user.currentUser};
};
export default connect(mapStateToProps, {
  switchTheme: switchTheme,
})(HomeScreen);

const styles = StyleSheet.create({
  profile: {elevation: 5},
});
