import React from 'react';
import {StyleSheet} from 'react-native';
import {width, height} from '../utils/dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {
  ScaledSheet,
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';

const FbButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.AUTH_BACKGROUND_COLOR};
  border-radius: ${verticalScale(20)}px;
  border-width: ${moderateScale(2)}px;
  border-color: ${props => props.theme.AUTH_BORDER_COLOR};
`;

export default function FacebookButton({onPress, ...rest}) {
  const theme = useSelector(state => state.themes.theme);
  return (
    <FbButton onPress={onPress} style={styles.facebook} {...rest}>
      <FontAwesome
        style={{...styles.facebookIcon, color: theme.FB_ICON}}
        name="facebook"
      />
    </FbButton>
  );
}

const styles = ScaledSheet.create({
  facebook: {
    width: width / 2.5,
    height: height / 10,
    elevation: 5,
  },
  facebookIcon: {
    fontSize: '30@mvs0.3',
  },
});
