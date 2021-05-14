import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function index() {
  return (
    <View style={styles.Page}>
      <Text>PRROFILE SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
