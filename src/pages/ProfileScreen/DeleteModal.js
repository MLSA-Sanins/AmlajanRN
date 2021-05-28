import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Modals from '../../components/Modals';
import {width, height} from '../../utils/dimensions';
import ModalButton from '../../components/ModalButton';

export default function DeleteModal({modalVisible, setModalVisible}) {
  return (
    <Modals
      modalHeight={height * 0.2}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <Text>Do you really want to delete the current user?</Text>
      <View style={styles.buttonView}>
        <ModalButton title="Yes" />
        <ModalButton onPress={() => setModalVisible(false)} title="Cancel" />
      </View>
    </Modals>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
