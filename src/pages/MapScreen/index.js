import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthProvider';

const MapScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.Page}>
      <Text>MapScreen</Text>
      <Button title="LOG OUT" onPress={() => logout()} />
    </View>
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
