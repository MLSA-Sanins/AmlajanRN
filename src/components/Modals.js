import React from 'react';
import {StyleSheet, Text, View, Modal, Alert, Pressable} from 'react-native';
import {width, height} from '../utils/dimensions';

export default function Modals({
  modalHeight,
  modalVisible,
  setModalVisible,
  children,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={styles.centeredView}>
        <View style={{...styles.modalView, height: modalHeight}}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
