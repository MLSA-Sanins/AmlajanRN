import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {width, height} from '../utils/dimensions';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {
  ScaledSheet,
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';

const Google = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.AUTH_BACKGROUND_COLOR};
  border-radius: ${verticalScale(20)}px;
  border-width: ${moderateScale(2)}px;
  border-color: ${props => props.theme.AUTH_BORDER_COLOR};
`;
export default function GoogleButton({onPress, ...rest}) {
  const theme = useSelector(state => state.themes.theme);
  return (
    <Google onPress={onPress} style={styles.google} {...rest}>
      <Icon
        style={{...styles.googleIcon, color: theme.GOOGLE_ICON}}
        name="google"
      />
    </Google>
  );
}

const styles = ScaledSheet.create({
  google: {
    width: width / 2.5,
    height: height / 10,
    elevation: 5,
  },
  googleIcon: {
    fontSize: '30@mvs0.3',
  },
});
