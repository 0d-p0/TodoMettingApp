import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../res/colors';

const RadioButtonComp = ({checked,handlePress}) => {


  return (
    <TouchableOpacity style={styles.radioButton} onPress={handlePress}>
      {checked && <View style={styles.innerCircle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.dark_grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.vividBlue,
  },
});

export default RadioButtonComp;
