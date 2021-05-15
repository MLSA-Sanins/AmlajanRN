import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {width, height} from '../utils/dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const FbButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 20px;
  border-width: 1px;
  border-color: #e5e5e5;
`;

export default function FacebookButton({onPress}) {
  const theme = useSelector(state => state.themes.theme);
  return (
    <FbButton onPress={onPress} style={styles.facebook}>
      <FontAwesome
        style={{...styles.facebookIcon, color: theme.FB_ICON}}
        name="facebook"
      />
    </FbButton>
  );
}

const styles = StyleSheet.create({
  facebook: {
    width: width / 2.5,
    height: height / 10,
    elevation: 5,
  },
  facebookIcon: {
    fontSize: 30,
  },
});
