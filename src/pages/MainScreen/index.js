import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStack from '../../navigation/MainStack';

export default function index() {
  return <MainStack />;
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
});
