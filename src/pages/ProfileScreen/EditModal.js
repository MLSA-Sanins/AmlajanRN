import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Modals from '../../components/Modals';
import {width, height} from '../../utils/dimensions';
import ModalButton from '../../components/ModalButton';
import styled from 'styled-components';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Formik} from 'formik';
import FormInput from '../../components/FormInput';
import editDetailsSchema from '../../utils/editDetailsSchema';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import Errors from '../../components/Errors';

const Header = styled.Text`
  font-size: ${moderateScale(20, 0.3)}px;
`;

export default function EditModal({
  modalVisible,
  setModalVisible,
  userData,
  location,
}) {
  const {displayName, phoneNumber} = userData;
  const theme = useSelector(state => state.themes.theme);
  const inactiveColor = '#cccccc';

  return (
    <Modals
      modalHeight={height * 0.8}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <Header style={styles.header}>Edit User Details</Header>
      <Formik
        validationSchema={editDetailsSchema}
        initialValues={{
          displayName: displayName || '',
          address: location.address || '',
          phoneNumber: phoneNumber || '',
        }}
        onSubmit={values => newUserRegistration(values)}
        validateOnMount>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <FormInput
              value={values.displayName}
              onChangeText={handleChange('displayName')}
              placeholder="Username"
              icon="user"
              autoCorrect={false}
              autoCompleteType="username"
              keyboardType="default"
              textContentType="username"
              autoCapitalize="none"
              onBlur={handleBlur('displayName')}
            />
            {errors.displayName && touched.displayName && (
              <Errors texts={errors.displayName} />
            )}
            <FormInput
              value={values.phoneNumber}
              placeholder="Phone Number"
              icon="smartphone"
              onChangeText={handleChange('phoneNumber')}
              autoCorrect={false}
              autoCompleteType="tel"
              keyboardType="number-pad"
              textContentType="telephoneNumber"
              autoCapitalize="none"
              onBlur={handleBlur('phoneNumber')}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Errors texts={errors.phoneNumber} />
            )}

            <View
              style={{
                ...styles.formContainerAddress,
                backgroundColor: theme.FORM_INPUT_COLOR,
              }}>
              <Feather
                style={{...styles.icon, color: theme.FORM_INPUT_TEXT_COLOR}}
                name="map"
              />
              <TextInput
                multiline
                numberOfLines={4}
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                style={{
                  ...styles.textInput,
                  color: theme.FORM_INPUT_TEXT_COLOR,
                }}
                placeholder="Address"
                placeholderTextColor={inactiveColor}
                autoCorrect={false}
                autoCompleteType="street-address"
                keyboardType="default"
                textContentType="fullStreetAddress"
                autoCapitalize="none"
              />
            </View>
            {errors.address && touched.address && (
              <Errors texts={errors.address} />
            )}
            <View style={styles.buttonView}>
              <ModalButton title="Save" onPress={handleSubmit} />
              <ModalButton
                onPress={() => setModalVisible(false)}
                title="Cancel"
              />
            </View>
          </>
        )}
      </Formik>
    </Modals>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingBottom: 50
  },
  buttonView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainerAddress: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderRadius: 5,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  }
});
