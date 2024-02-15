import {PixelRatio, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../res/colors';

const HorizontalDivider = () => {
  return <View style={styles.container} />;
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: colors.dark_grey,
    marginVertical: PixelRatio.roundToNearestPixel(5),
  },
});
