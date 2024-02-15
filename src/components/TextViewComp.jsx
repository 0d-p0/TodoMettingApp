import {
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../res/colors';
import VerticalDividerComp from './VerticalDividerComp';

const TextViewComp = ({value, style, textStyle}) => {
  return (
    <View style={[styles.container, style]}>
      {/* icon and Input container */}
      <View style={styles.inputContainer}>
        <Text style={[styles.textInput, textStyle]}>{value}</Text>
      </View>
    </View>
  );
};

export default TextViewComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: PixelRatio.roundToNearestPixel(5),
    paddingHorizontal: PixelRatio.roundToNearestPixel(10),
    margin: PixelRatio.roundToNearestPixel(15),
    backgroundColor: colors.grey,
    borderRadius: 15,
    gap: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    width: '100%',
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  btnText: {
    color: colors.brown,
    fontSize: 16,
    fontWeight: '500',
  },
});
