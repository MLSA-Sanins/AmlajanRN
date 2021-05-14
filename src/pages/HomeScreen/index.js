import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';
import GradientButton from '../../components/GradientButton';
import {checkUserExistence} from '../../api/herokuApi';
import {connect} from 'react-redux';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);

  const checkApi = async uid => {
    try {
      const res = await checkUserExistence(uid);
      console.log(res.data.Provider.email);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.Page}>
      <Text>HomeScreen</Text>
      <GradientButton
        title="FETCH USER"
        height={50}
        onPress={() => checkApi('gD85INYhLZTqXqQDDJfdpoALtC2')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
