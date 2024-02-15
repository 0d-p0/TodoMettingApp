import {View} from 'react-native';
import React from 'react';
import {colors} from '../res/colors';

const VerticalDividerComp = ({
  color = colors.dark_grey,
  width = 2,
  height = 40,
}) => {
  return (
    <View
      style={{
        width: width,
        backgroundColor: color,
        height: height,
        borderRadius: 10,
      }}
    />
  );
};

export default VerticalDividerComp;
