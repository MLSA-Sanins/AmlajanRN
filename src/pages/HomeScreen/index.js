import React, {useContext, useState} from 'react';
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
import {height, width} from '../../utils/dimensions';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import AppNavigationHeader from '../../components/AppNavigationHeader';

const HomeScreen = ({navigation, userData}) => {
  const theme = useSelector(state => state.themes.theme);
  const [distance, setDistance] = useState(5);

  return (
    <Screen>
      <AppNavigationHeader height={height * 0.12}>
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
        <MapView onPress={() => navigation.navigate('Maps')}>
          <MapImage source={require('../../assets/map.jpg')} />
        </MapView>
        <DistanceSection setDistance={setDistance} />
        <ProviderSection distance={distance} theme={theme} />
      </HomeView>
    </Screen>
  );
};
const mapStateToProps = state => {
  return {
    userData: state.user.currentUser,
    allProviders: state.providers.allProviders,
  };
};
export default connect(mapStateToProps, null)(HomeScreen);

const styles = StyleSheet.create({
  profile: {elevation: 5},
});
