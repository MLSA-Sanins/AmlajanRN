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
import {DummyData} from '../../utils/DummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProviderSection = ({theme}) => {
  const size = 80;
  //calculating right dimension to be fetched
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(size),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(size),
  };
  const profile = {
    uri: `${DummyData.photoURL}?height=${picDimension.picHeight}`,
    width: size,
    height: size,
  };
  return (
    <ProviderView>
      <ProviderHeader>
        Showing {DummyData.length} Results. Scroll Down to View.{' '}
      </ProviderHeader>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DummyData}
        keyExtractor={item => item.uid}
        renderItem={({item}) => {
          return (
            <ProfileCard>
              <ImgView>
                <CardImgContainer>
                  {DummyData.photoURL ? (
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
export default ProviderSection;
const styles = StyleSheet.create({});
