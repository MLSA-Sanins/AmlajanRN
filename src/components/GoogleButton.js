import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {width, height} from '../utils/dimensions';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Google = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 20px;
  border-width: 1px;
  border-color: #e5e5e5;
`;
export default function GoogleButton({onPress}) {
  const theme = useSelector(state => state.themes.theme);
  return (
    <Google onPress={onPress} style={styles.google}>
      <Icon
        style={{...styles.googleIcon, color: theme.GOOGLE_ICON}}
        name="google"
      />
    </Google>
  );
}

const styles = StyleSheet.create({
  google: {
    width: width / 2.5,
    height: height / 10,
  },
  googleIcon: {
    fontSize: 30,
  },
});
