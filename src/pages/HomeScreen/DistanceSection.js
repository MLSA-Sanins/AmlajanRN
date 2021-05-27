import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {DistanceText, DistanceView, DistanceButtons} from './styles';
import {distance} from '../../redux/constants/distance';
import { useSelector } from 'react-redux';
import {height, width} from '../../utils/dimensions';
import {ScaledSheet,scale, verticalScale, moderateScale} from 'react-native-size-matters';

const DistanceSection = ({setDistance}) => {
  const renderSeparator = () => <View style={styles.separator} />;
  const theme = useSelector(state => state.themes.theme);
  const [active, setActive] = useState(0);

  const settingValue = (index, value) => {
    setActive(index);
    setDistance(value);
  };

  return (
    <DistanceView>
      <FlatList
        horizontal
        ItemSeparatorComponent={() => renderSeparator()}
        showsHorizontalScrollIndicator={false}
        data={distance}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <DistanceButtons
              onPress={() => {
                settingValue(index, item.value);
              }}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.distanceButton,
                marginLeft: index === 0 ? scale(20) : 0,
                marginRight: index === 7 ? scale(20) : 0,
                backgroundColor:
                  index === active ? 'gray' : theme.DISTANCE_BUTTON_COLOR,
              }}>
              <DistanceText>{item.dis}</DistanceText>
            </DistanceButtons>
          );
        }}
      />
    </DistanceView>
  );
};

export default DistanceSection;

const styles = ScaledSheet.create({
  distanceButton: {elevation: 5},
  separator: {
    width: '20@s',
  },
});
