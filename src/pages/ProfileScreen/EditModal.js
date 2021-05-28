import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modals from '../../components/Modals';
import {width, height} from '../../utils/dimensions';
import ModalButton from '../../components/ModalButton';
import styled from 'styled-components';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Header = styled.Text`
  font-size: ${moderateScale(20, 0.3)}px;
`;

export default function EditModal({modalVisible, setModalVisible}) {
  return (
    <Modals
      modalHeight={height * 0.8}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <Header>Edit User Details</Header>
      <View style={styles.buttonView}>
        <ModalButton title="Save" />
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
