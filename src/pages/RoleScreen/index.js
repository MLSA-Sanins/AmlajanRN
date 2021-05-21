import React, {useEffect, useState, useContext} from 'react';
import AuthNavigationHeader from '../../components/AuthNavigationHeader';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  InteractionManager,
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import {width, height} from '../../utils/dimensions';
import {primary, secondary} from '../..//theme/theme';
import GradientButton from '../../components/GradientButton';
import LoadingView from '../../components/LoadingView';
import {connect} from 'react-redux';
import {fecthLocationAndAddress} from '../../redux/actions/locationActions';
import {AuthContext} from '../../context/AuthProvider';
import {useSelector} from 'react-redux';
import {Screen} from '../../components/Screen';

const RoleScreen = ({navigation, fecthLocationAndAddress, isLoading}) => {
  const {logout} = useContext(AuthContext);
  const theme = useSelector(state => state.themes.theme);

  useEffect(() => {
    fecthLocationAndAddress(PermissionsAndroid);
  }, []);

  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <Screen style={styles.Page}>
      <AuthNavigationHeader onPress={() => logout()} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/png/vaccine.png')}
          style={styles.img}
        />
      </View>
      <Text style={{...styles.title, color: theme.PRIMARY_TEXT_COLOR}}>
        CHOOSE
      </Text>
      <Text style={{...styles.subTitle, color: theme.SECONDARY_COLOR}}>
        YOUR ROLE
      </Text>
      <GradientButton
        height={50}
        title="PATIENT"
        onPress={() => navigation.navigate('UserDetails', {title: 'Patient'})}
      />
      <GradientButton
        height={50}
        title="PROVIDER"
        onPress={() => navigation.navigate('UserDetails', {title: 'Provider'})}
      />
    </Screen>
  );
};

const mapStateToProps = state => {
  return {isLoading: state.user.loadingLocation};
};

export default connect(mapStateToProps, {
  fecthLocationAndAddress: fecthLocationAndAddress,
})(RoleScreen);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  imgContainer: {
    paddingTop: 20,
    marginHorizontal: 30,
  },
  img: {
    width: width,
    height: height * 0.5,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: primary.main,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: secondary.button,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 15,
  },
});
