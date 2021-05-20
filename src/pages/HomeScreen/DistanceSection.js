import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {DistanceText, DistanceView, DistanceButtons} from './styles';
import {distance} from '../../redux/constants/distance';

const DistanceSection = () => {
  const renderSeparator = () => <View style={styles.separator} />;
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
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.distanceButton,
                marginLeft: index === 0 ? 20 : 0,
                marginRight: index === 6 ? 20 : 0,
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

const styles = StyleSheet.create({
  distanceButton: {elevation: 5},
  separator: {
    width: 20,
  },
});
