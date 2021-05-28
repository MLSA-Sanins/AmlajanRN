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
  const [modalVisible, setModalVisible] = useState(false);
  const {logout} = useContext(AuthContext);
  const size = height * 0.2;
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
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}
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
          <StatsSection onPress={() => setModalVisible(true)}>
            <AntDesign
              name="setting"
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
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   width:200,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
});
