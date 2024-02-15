import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalDashedLine = ({height, color, dashWidth, dashGap}) => {
  const numDashes = Math.floor(height / (dashWidth + dashGap));
  const dashArray = [];
  for (let i = 0; i < numDashes; i++) {
    dashArray.push(i);
  }

  return (
    <View style={[styles.verticalLine, {height}]}>
      {dashArray.map(index => (
        <View
          key={index}
          style={[styles.dash, {borderColor: color, borderTopWidth: dashWidth}]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dash: {
    width: 2, // Adjust this to change the thickness of the dashes
    borderStyle: 'dashed',
  },
});

export default VerticalDashedLine;
