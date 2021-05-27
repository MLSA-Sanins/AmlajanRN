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

const MapScreen = ({navigation, location, allProviders}) => {
  const theme = useSelector(state => state.themes.theme);
  // const [isLoading, setIsLoading] = useState(true);

  const mapTheme = () => {
    return theme.mode === 'light' ? mapNormal : mapDarkStyle;
  };

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
      {location.latitude !== null && (
        <MapView
          customMapStyle={mapTheme()}
          style={{...styles.Maps}}
          initialRegion={{
            latitude: location.latitude || location.lat,
            longitude: location.longitude || location.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {allProviders.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.location.lat || marker.location.latitude,
                longitude: marker.location.long || marker.location.longitude,
              }}
              title={marker.displayName}
              description={marker.location.address}
            />
          ))}
          <Marker
            pinColor="yellow"
            title="My Location"
            coordinate={{
              latitude: location.latitude || location.lat,
              longitude: location.longitude || location.long,
            }}
          />
        </MapView>
      )}
    </Screen>
  );
};
const mapStateToProps = state => {
  return {
    location: state.user.currentUser.location,
    allProviders: state.providers.allProviders,
  };
};

const component = React.memo(MapScreen);
export default connect(mapStateToProps, null)(component);

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
