import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  PixelRatio,
  Touchable,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import Modals from '../../components/Modals';
import {Screen} from '../../components/Screen';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {switchTheme} from '../../redux/actions/themeActions';
import {connect} from 'react-redux';
import {AuthContext} from '../../context/AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {height, width} from '../../utils/dimensions';
import {BlurView} from '@react-native-community/blur';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
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
  Address,
} from './styles';

const ProfileScreen = ({navigation, switchTheme, userData}) => {
  const theme = useSelector(state => state.themes.theme);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const {logout} = useContext(AuthContext);
  const size = height * 0.2;
  //calculating right dimension to be fetched
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(size),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(size),
  };
  //profile pic source
  const profile = {
    uri: `${userData.photoURL}?height=${picDimension.picHeight}`,
    width: size,
    height: size,
  };
  //switch themes
  const switchThemes = () => {
    theme.mode === 'light' ? switchTheme(darkTheme) : switchTheme(lightTheme);
  };
  // //show edit modal
  // const showDeleteModal = () => {
  //   setDeleteModalVisible(true);
  // };
  // const showEditModal = () => {
  //   setEditModalVisible(true);
  // };
  return (
    <Screen>
      <AppNavigationHeader height={height * 0.25}>
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
        <DeleteModal
          modalVisible={deleteModalVisible}
          setModalVisible={setDeleteModalVisible}
        />
        <EditModal
          modalVisible={editModalVisible}
          setModalVisible={setEditModalVisible}
        />
        <ImgContainer style={styles.ImgContainer}>
          {userData.photoURL ? (
            <ProfileThumbnail progressiveRenderingEnabled source={profile} />
          ) : (
            <AntDesign name="user" size={30} color={theme.PRIMARY_TEXT_COLOR} />
          )}
        </ImgContainer>
        <PaddingView />
        <UserName>{userData.displayName}</UserName>
        <Address>{userData.location.address}</Address>
        <StatsView>
          <StatsSection onPress={() => setEditModalVisible(true)}>
            <AntDesign
              name="edit"
              size={25}
              backgroundColor={theme.STATS_VIEW_COLOR}
              color={theme.FORM_INPUT_TEXT_COLOR}
            />
          </StatsSection>
          <StatsSection onPress={() => setDeleteModalVisible(true)}>
            <AntDesign
              name="deleteuser"
              size={25}
              backgroundColor={theme.STATS_VIEW_COLOR}
              color={theme.FORM_INPUT_TEXT_COLOR}
            />
          </StatsSection>
          <StatsSection onPress={() => switchThemes()}>
            <AntDesign
              name="bulb1"
              size={25}
              backgroundColor={theme.STATS_VIEW_COLOR}
              color={theme.FORM_INPUT_TEXT_COLOR}
            />
          </StatsSection>
          <LastStatsSection onPress={() => logout()}>
            <AntDesign
              name="logout"
              size={25}
              backgroundColor={theme.STATS_VIEW_COLOR}
              color={theme.FORM_INPUT_TEXT_COLOR}
            />
          </LastStatsSection>
        </StatsView>
        {/* <GradientButton
          title={`${theme.mode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}`}
          height={50}
          onPress={() => switchThemes()}
        />
        <GradientButton title="LOG OUT" height={50} onPress={() => logout()} /> */}
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
  absolutes: {
    width: 200,
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
