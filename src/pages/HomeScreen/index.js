import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {HomeView, MapView, MapImage} from './styles';
import ProfileSection from './ProfileSection';
import DistanceSection from './DistanceSection';
import ProviderSection from './ProviderSection';
import {connect} from 'react-redux';
import {Screen} from '../../components/Screen';
import {useSelector} from 'react-redux';
import LoadingView from '../../components/LoadingView';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppNavigationHeader from '../../components/AppNavigationHeader';

const HomeScreen = ({navigation, userData}) => {
  const theme = useSelector(state => state.themes.theme);

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
        <ProfileSection theme={theme} userData={userData} />
        {/* <MapView onPress={() => navigation.navigate('Maps')}>
          <MapImage source={require('../../assets/map.jpg')} />
        </MapView> */}
        <DistanceSection />
        <ProviderSection theme={theme} />
      </HomeView>
    </Screen>
  );
};
const mapStateToProps = state => {
  return {userData: state.user.currentUser};
};
export default connect(mapStateToProps, null)(HomeScreen);

const styles = StyleSheet.create({
  profile: {elevation: 5},
});
