import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Screen} from '../../components/Screen';

export default function index() {
  return (
    <Screen>
      <Text>PRROFILE SCREEN</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
