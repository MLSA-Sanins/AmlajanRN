import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  InteractionManager,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/Screen';
import {connect} from 'react-redux';
import AppNavigationHeader from '../../components/AppNavigationHeader';
import LoadingView from '../../components/LoadingView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, {Marker} from 'react-native-maps';
import mapNormal from '../../utils/mapNormal.json';
import mapDarkStyle from '../../utils/mapDarkStyle.json';
import mapAubergine from '../../utils/mapAubergine.json';
import {DummyData} from '../../utils/DummyData';

const MapScreen = ({navigation, location}) => {
  const theme = useSelector(state => state.themes.theme);
  const [isLoading, setIsLoading] = useState(true);

  const mapTheme = () => {
    return theme.mode === 'light' ? mapNormal : mapDarkStyle;
  };

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      /*     // 2: Component is done animating */
      /*     // 3: Start fetching the team */
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <Screen>
      <AppNavigationHeader height={100}>
        <AntDesign.Button
          name="home"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Home')}
        />
        <AntDesign.Button
          name="user"
          size={25}
          backgroundColor={theme.SECONDARY_COLOR}
          color={theme.PRIMARY_TEXT_COLOR}
          onPress={() => navigation.navigate('Profile')}
        />
      </AppNavigationHeader>
      <MapView
        customMapStyle={mapTheme()}
        style={{...styles.Maps}}
        initialRegion={{
          latitude: location.lat,
          longitude: location.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {DummyData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.location.lat,
              longitude: marker.location.long,
            }}
            title={marker.displayName}
            description={marker.location.address}
          />
        ))}
      </MapView>
    </Screen>
  );
};
const mapStateToProps = state => {
  return {location: state.user.currentUser.location};
};

export default connect(mapStateToProps, null)(MapScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Maps: {
    flex: 1,
  },
});
