import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContext from './src/context/AppContext';
import MainNavigation from './src/navigation/MainNavigation';
import {colors} from './src/res/colors';

const App = () => {
  return (
    <AppContext>
      <StatusBar backgroundColor={colors.vividBlue} barStyle="light-content" />

      <MainNavigation />
    </AppContext>
  );
};

export default App;

const styles = StyleSheet.create({});
