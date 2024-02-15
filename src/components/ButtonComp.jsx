import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../res/colors';

const ButtonComp = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <Text style={{...styles.btnText, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.vividBlue,
    borderRadius: 15,
    elevation: 5,
    shadowColor: colors.grey,
    shadowRadius: 10,
    width: '100%',
    padding: PixelRatio.roundToNearestPixel(10),
    alignItems: 'center',
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.white,
  },
});
