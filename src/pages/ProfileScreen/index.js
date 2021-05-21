import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  PixelRatio,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Screen} from '../../components/Screen';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {switchTheme} from '../../redux/actions/themeActions';
import {connect} from 'react-redux';
import {AuthContext} from '../../context/AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import GradientButton from '../../components/GradientButton';
import {
  ProfileView,
  ImgContainer,
  ProfileThumbnail,
  PaddingView,
  UserName,
  StatsView,
  StatsSection,
  LastStatsSection,
  Icon,
} from './styles';

const ProfileScreen = ({navigation, switchTheme, userData}) => {
  const theme = useSelector(state => state.themes.theme);
  const {logout} = useContext(AuthContext);
  const size = 150;
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
  const switchThemes = () => {
    theme.mode === 'light' ? switchTheme(darkTheme) : switchTheme(lightTheme);
  };
  return (
    <Screen>
      <AppNavigationHeader height={150}>
        <AntDesign.Button
          name="back"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Maps')}
        />
        <></>
      </AppNavigationHeader>
      <ProfileView>
        <ImgContainer style={styles.ImgContainer}>
          {userData.photoURL ? (
            <ProfileThumbnail progressiveRenderingEnabled source={profile} />
          ) : (
            <AntDesign name="user" size={30} color={theme.PRIMARY_TEXT_COLOR} />
          )}
        </ImgContainer>
        <PaddingView />
        <UserName>{userData.displayName}</UserName>
        <StatsView>
          <StatsSection>
            <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
              <AntDesign
                name="setting"
                size={25}
                backgroundColor={theme.STATS_VIEW_COLOR}
                color={theme.FORM_INPUT_TEXT_COLOR}
              />
            </TouchableOpacity>
          </StatsSection>
          <StatsSection>
            <TouchableOpacity onPress={() => switchThemes()}>
              <AntDesign
                name="bulb1"
                size={25}
                backgroundColor={theme.STATS_VIEW_COLOR}
                color={theme.FORM_INPUT_TEXT_COLOR}
              />
            </TouchableOpacity>
          </StatsSection>
          <LastStatsSection>
            <TouchableOpacity onPress={() => logout()}>
              <AntDesign
                name="logout"
                size={25}
                backgroundColor={theme.STATS_VIEW_COLOR}
                color={theme.FORM_INPUT_TEXT_COLOR}
              />
            </TouchableOpacity>
          </LastStatsSection>
        </StatsView>
        <GradientButton
          title={`${theme.mode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}`}
          height={50}
          onPress={() => switchThemes()}
        />
        <GradientButton title="LOG OUT" height={50} onPress={() => logout()} />
      </ProfileView>
    </Screen>
  );
};

const mapStateToProps = state => {
  return {userData: state.user.currentUser};
};

export default connect(mapStateToProps, {
  switchTheme: switchTheme,
})(ProfileScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgContainer: {
    elevation: 5,
  },
});
