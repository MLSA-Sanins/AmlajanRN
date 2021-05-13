import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LoadingView() {
  return (
    <View style={styles.Page}>
      <Text>Loading...</Text>
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
