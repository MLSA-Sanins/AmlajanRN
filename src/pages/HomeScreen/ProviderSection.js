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
} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

const ProviderSection = ({theme, allProviders}) => {
  const size = 80;
  //calculating right dimension to be fetched
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(size),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(size),
  };
  const profile = {
    uri: `${allProviders.photoURL}?height=${picDimension.picHeight}`,
    width: size,
    height: size,
  };
  return (
    <ProviderView>
      <ProviderHeader>
        Showing {allProviders.length} Results. Scroll Down to View.{' '}
      </ProviderHeader>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allProviders}
        keyExtractor={item => item.uid}
        renderItem={({item}) => {
          return (
            <ProfileCard>
              <ImgView>
                <CardImgContainer>
                  {allProviders.photoURL ? (
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
                <ProviderDistance>23 km</ProviderDistance>
                <ProviderAddress>{item.location.address}</ProviderAddress>
              </CardDescription>
            </ProfileCard>
          );
        }}
      />
    </ProviderView>
  );
};

const mapStateToProps = state => {
  return {allProviders: state.providers.allProviders};
};
export default connect(mapStateToProps, null)(ProviderSection);
const styles = StyleSheet.create({});
