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

const TextInputComp = ({
  children,
  value,
  placeholder,
  onchnageValue,
  btnText,
  showButton = false,
  onPress,
  keyboardType = 'default',
  style,
  textStyle,
  readOnly = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* icon and Input container */}
      <View style={styles.inputContainer}>
        {/* Icon */}
        {children}
        {/* Input Feild */}
        <TextInput
          // readOnly={readOnly}
          value={value}
          onChangeText={onchnageValue}
          style={[styles.textInput, textStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.brown}
          keyboardType={keyboardType}
        />
      </View>
      {/* Action Button */}
      {showButton && (
        <View style={styles.actionButtonContainer}>
          {/* Vertical Divider */}
          <VerticalDividerComp />
          {/* Action  Button */}
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TextInputComp;

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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    color: colors.brown,
    fontSize: 18,
    fontWeight: '400',
    width: '85%',
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
