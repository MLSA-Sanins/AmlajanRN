import React from 'react';
import {StyleSheet, PixelRatio} from 'react-native';
import {ImgContainer, ProfileThumbnail, ProfileName} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileSection = ({userData, theme}) => {
  const size = 65;
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
  return (
    <>
      <ImgContainer style={styles.profile}>
        {userData.photoURL ? (
          <ProfileThumbnail progressiveRenderingEnabled source={profile} />
        ) : (
          <AntDesign name="user" size={30} color={theme.PRIMARY_TEXT_COLOR} />
        )}
      </ImgContainer>
      <ProfileName>Hi ! {userData.displayName}</ProfileName>
    </>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({profile: {elevation: 5}});
