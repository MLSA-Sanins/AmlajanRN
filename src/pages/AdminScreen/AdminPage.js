import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux';

export default function AdminPage() {
  return (
    <View style={styles.Page}>
      <Text>Hello Admin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
