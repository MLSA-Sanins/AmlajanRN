import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';
import {Screen} from '../../components/Screen';

const MapScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Screen>
      <Text>MapScreen</Text>
      <Button title="LOG OUT" onPress={() => logout()} />
    </Screen>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
