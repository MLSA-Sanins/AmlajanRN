import React from 'react';
import {StyleSheet, PixelRatio, FlatList} from 'react-native';
import {
  ProviderView,
  ProfileCard,
  CardImgContainer,
  ImgThumbnail,
  CardDescription,
  ImgView,
  CardTitle,
  ProviderDistance,
  ProviderAddress,
  ProviderHeader,
  ContactNumber,
} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

const ProviderSection = ({
  theme,
  allProviders,
  nearbyProviders,
  distance,
  loadingLocation,
  loadingNearbyProviders,
}) => {
  const size = 80;
  //calculating right dimension to be fetched
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(size),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(size),
  };

  const filterList = nearbyProviders.filter(prov => {
    return prov.distance <= distance;
  });

  const showLists = () => {
    if (distance < 200) {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterList.sort((a, b) => a.distance - b.distance)}
          keyExtractor={item => item.uid}
          renderItem={({item}) => {
            return (
              <ProfileCard>
                <ImgView>
                  <CardImgContainer>
                    {item.photoURL ? (
                      <ImgThumbnail
                        progressiveRenderingEnabled
                        source={profile}
                      />
                    ) : (
                      <AntDesign
                        name="user"
                        size={30}
                        color={theme.PRIMARY_TEXT_COLOR}
                      />
                    )}
                  </CardImgContainer>
                </ImgView>
                <CardDescription>
                  <CardTitle>{item.displayName}</CardTitle>
                  <ProviderDistance>
                    {Math.floor(item.distance)} km
                  </ProviderDistance>
                  <ProviderAddress>{item.location.address}</ProviderAddress>
                  <ContactNumber>Mob : {item.contact_number}</ContactNumber>
                </CardDescription>
              </ProfileCard>
            );
          }}
        />
      );
    } else {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allProviders}
          keyExtractor={item => item.uid}
          renderItem={({item}) => {
            return (
              <ProfileCard>
                <ImgView>
                  <CardImgContainer>
                    {item.photoURL ? (
                      <ImgThumbnail
                        progressiveRenderingEnabled
                        source={profile}
                      />
                    ) : (
                      <AntDesign
                        name="user"
                        size={30}
                        color={theme.PRIMARY_TEXT_COLOR}
                      />
                    )}
                  </CardImgContainer>
                </ImgView>
                <CardDescription>
                  <CardTitle>{item.displayName}</CardTitle>
                  <ProviderAddress>{item.location.address}</ProviderAddress>
                </CardDescription>
              </ProfileCard>
            );
          }}
        />
      );
    }
  };

  if (loadingLocation && loadingNearbyProviders) {
    return <ProviderHeader>Loading Data of Providers</ProviderHeader>;
  }

  const profile = {
    uri: `${allProviders.photoURL}?height=${picDimension.picHeight}`,
    width: size,
    height: size,
  };
  return (
    <ProviderView>
      <ProviderHeader>
        Showing {distance < 200 ? filterList.length : allProviders.length}{' '}
        Results. Scroll Down to View.
      </ProviderHeader>
      {showLists()}
    </ProviderView>
  );
};

const mapStateToProps = state => {
  return {
    allProviders: state.providers.allProviders,
    nearbyProviders: state.providers.nearbyProviders,
    loadingLocation: state.providers.isLoading,
    loadingNearbyProviders: state.providers.loadingNearbyProviders,
  };
};
export default connect(mapStateToProps, null)(ProviderSection);
const styles = StyleSheet.create({});
