import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import {width, height} from '../../utils/dimensions';
import {primary, secondary} from '../../theme/theme';
import GradientButton from '../../components/GradientButton';

//svg
// import Navigation from "../../../assets/svgCodes/Navigation";
// import Search from "../../../assets/svgCodes/Search";
// import Social from "../../../assets/svgCodes/Social";
// import Welcome from "../../../assets/svgCodes/Welcome";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: height * 0.08,
    alignItems: 'center',
  },
  img: {
    //height: height * 0.5,
    // borderTopRightRadius: 80,
    // borderBottomLeftRadius: 80,
    // height: height * 0.5,
    // width: width * 0.9,
    paddingHorizontal: 30,
    height: height * 0.5,
    width: width * 0.9,
  },
  titleContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    height: '8%',
    width: '100%',
  },
  textContainer: {
    paddingHorizontal: 20,
    height: '30%',
    width: '100%',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: '#767676',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  // buttonContainer: {
  //   marginHorizontal: 50,
  //   backgroundColor: secondary.button,
  //   marginTop: 20,
  //   borderRadius: 10,
  //   width: 200,
  // },
  buttonText: {
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 15,
  },
  lastSlideTitle: {
    textAlign: 'center',
    fontSize: 32,
    marginTop: 60,
  },
  lastSlideText: {
    color: '#767676',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonRight: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    width: 60,
    backgroundColor: secondary.button,
  },
  buttonLeft: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginBottom: 10,
    backgroundColor: secondary.button,
    marginHorizontal: 20,
  },
});

const OnboardingScreen = ({navigation}) => {
  return (
    <Swiper
      buttonWrapperStyle={styles.buttonWrapper}
      loop={false}
      index={0}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={{
        marginRight: width * 0.7,
        marginBottom: height * 0.02,
      }}
      activeDotColor={secondary.button}
      dotColor={secondary.backgroundGray}
      nextButton={
        <View style={styles.buttonRight}>
          <Icon name="arrowright" size={22} color="#FFF" />
        </View>
      }
      prevButton={
        <View style={styles.buttonLeft}>
          <Icon name="arrowleft" size={22} color="#FFF" />
        </View>
      }>
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/png/search.png')}
          style={styles.img}
        />
        {/* <Search style={styles.img} /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SEARCH</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            In this hustle of COVID with oxygen availability being so less, we
            are providing a platform for people in dire need of oxygen to search
            oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/png/contact.png')}
          style={styles.img}
        />
        {/* <Social style={styles.img}/> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CONTACT</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            In this hustle of COVID with oxygen availability being so less, we
            are providing a platform for people in dire need of oxygen to search
            oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../../../assets/png/map.png')}
          style={styles.img}
        />
        {/* <Navigation style={styles.img}/> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>VISUALISE</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            In this hustle of COVID with oxygen availability being so less, we
            are providing a platform for people in dire need of oxygen to search
            oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/png/welcome.png')}
          style={styles.img}
        />
        {/* <Welcome style={styles.img}/> */}
        <Text style={styles.lastSlideTitle}>WELCOME</Text>
        <Text style={styles.lastSlideText}>
          Wishing you a lightning recovery.
        </Text>
        <GradientButton
          onPress={() => navigation.navigate('Login')}
          title="SIGN IN"
          height={50}
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGNIN</Text>
        </TouchableOpacity> */}
      </View>
    </Swiper>
  );
  // }
};

export default OnboardingScreen;
