import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {icons} from '../res/icon/icons';
import {colors} from '../res/colors';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../routes/navigation.routes';

const HeaderRightComp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.Notifiaction);
        }}>
        <icons.bellIcon color={colors.dark_grey} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.History);
        }}>
        <icons.historyIcon color={colors.dark_grey} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
});
