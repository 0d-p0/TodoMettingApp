import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {icons} from '../res/icon/icons';
import {colors} from '../res/colors';
import {AppStore} from '../context/AppContext';

const HeaderLeftComp = () => {
  const {changeModelVisibility} = useContext(AppStore);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          changeModelVisibility(true);
        }}>
        <icons.filterIcon color={colors.dark_grey} size={20} />
      </TouchableOpacity>
    </>
  );
};

export default HeaderLeftComp;
