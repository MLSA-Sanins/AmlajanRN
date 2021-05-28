import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import {width, height} from '../../utils/dimensions';
import {primary, secondary} from '../../theme/theme';
import GradientButton from '../../components/GradientButton';
import {useSelector} from 'react-redux';
import {
  s,
  vs,
  ms,
  mvs,
  msr,
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: '2@vs',
    alignItems: 'center',
  },
  imgView: {
    alignItems: 'center',
    width: width > height * 0.5 ? `${height * 0.5}@s` : `${width}@s`,
    height: width > height * 0.5 ? `${height * 0.5}@vs` : `${width}@vs`,
  },
  img: {
    width: width > height * 0.5 ? `${height * 0.5}@s` : `${width}@s`,
    height: width > height * 0.5 ? `${height * 0.5}@vs` : `${width}@vs`,
  },
  titleContainer: {
    paddingHorizontal: '20@s',
    display: 'flex',
    justifyContent: 'center',
    height: '8%',
    width: '100%',
  },
  textContainer: {
    paddingHorizontal: '20@s',
    width: '100%',
  },
  title: {
    fontSize: '32@msr',
    fontFamily: 'Montserrat-Regular',
  },
  text: {
    color: '#767676',
    fontSize: '16@msr',
    lineHeight: '25@vs',
    fontFamily: 'Montserrat-Regular',
  },
  buttonText: {
    color: 'white',
    padding: '15@ms',
    textAlign: 'center',
    fontSize: '15@msr',
  },
  lastSlideTitle: {
    textAlign: 'center',
    fontSize: '32@msr',
  },
  lastSlideText: {
    color: '#767676',
    fontSize: '16@msr',
    lineHeight: '25@vs',
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: '30@s',
    paddingVertical: '20@vs',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonRight: {
    height: '40@vs',
    borderRadius: '20@msr',
    alignItems: 'center',
    marginBottom: '10@vs',
    justifyContent: 'center',
    width: '60@s',
    backgroundColor: secondary.button,
  },
  buttonLeft: {
    height: '40@vs',
    borderRadius: '20@msr',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60@s',
    marginBottom: '10@vs',
    backgroundColor: secondary.button,
    marginHorizontal: '20@vs',
  },
});

const OnboardingScreen = ({navigation}) => {
  const theme = useSelector(state => state.themes.theme);
  return (
    <Swiper
      buttonWrapperStyle={styles.buttonWrapper}
      loop={false}
      index={0}
      style={{
        ...styles.wrapper,
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      }}
      showsButtons={true}
      paginationStyle={{
        marginRight: width * 0.7,
        marginBottom: height * 0.02,
      }}
      activeDotColor={theme.SECONDARY_COLOR}
      dotColor={secondary.backgroundGray}
      nextButton={
        <View
          style={{
            ...styles.buttonRight,
            backgroundColor: theme.SECONDARY_COLOR,
          }}>
          <Icon name="arrowright" size={22} color="#FFF" />
        </View>
      }
      prevButton={
        <View
          style={{
            ...styles.buttonLeft,
            backgroundColor: theme.SECONDARY_COLOR,
          }}>
          <Icon name="arrowleft" size={22} color="#FFF" />
        </View>
      }>
      <View style={styles.slide}>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/png/search.png')}
            style={styles.img}
          />
        </View>
        {/* <Search style={styles.img} /> */}
        <View style={styles.titleContainer}>
          <Text style={{...styles.title, color: theme.PRIMARY_TEXT_COLOR}}>
            SEARCH
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            With the increasing cases of inadequate oxygen supply, we pave the
            way for patients to search for providers. Patients are equipped with
            the power to seek oxygen providers in their range with just a click.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/png/contact.png')}
            style={styles.img}
          />
        </View>

        {/* <Social style={styles.img}/> */}
        <View style={styles.titleContainer}>
          <Text style={{...styles.title, color: theme.PRIMARY_TEXT_COLOR}}>
            VISUALISE
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            To make the information and navigation simpler, we provide means for
            viewing the locations of oxygen providers on a map.
          </Text>
        </View>
      </View>

      <View style={styles.slide}>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/png/map.png')}
            style={styles.img}
          />
        </View>

        {/* <Navigation style={styles.img}/> */}
        <View style={styles.titleContainer}>
          <Text style={{...styles.title, color: theme.PRIMARY_TEXT_COLOR}}>
            CONTACT
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Here, patients are empowered with a way to communicate with
            providers to check the availability of oxygen and clear any of their
            queries.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/png/welcome.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={{...styles.lastSlideTitle, color: theme.PRIMARY_TEXT_COLOR}}>
            WELCOME
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.lastSlideText}>
            Wishing you a lightning recovery.
          </Text>
        </View>

        <GradientButton
          onPress={() => navigation.navigate('Login')}
          title="SIGN IN"
          height={50}
        />
      </View>
    </Swiper>
  );
  // }
};

export default OnboardingScreen;
