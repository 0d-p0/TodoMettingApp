import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {colors} from '../res/colors';
import VerticalDividerComp from '../components/VerticalDividerComp';
import TodoComp from '../components/TodoComp';
import FilterComp from '../components/FilterComp';
import {icons} from '../res/icon/icons';
import demoData from '../utils/demoData';
import {AppStore} from '../context/AppContext';
import auth from '@react-native-firebase/auth';
import {routes} from '../routes/navigation.routes';

const HomeScreen = ({navigation}) => {
  // Get the current date
  const currentDate = new Date();

  // Filter demo data for upcoming tasks
  const upcomingTasks = demoData.filter(
    task => new Date(task.date) > currentDate,
  );

  // Filter demo data for completed tasks (tasks with past dates)
  const completedTasks = demoData.filter(
    task => new Date(task.date) <= currentDate,
  );


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Upcoming Tasks */}
        <View style={styles.titleContainer}>
          <VerticalDividerComp width={4} color={colors.vividBlue} height={30} />
          <Text style={styles.titleText}>Upcoming</Text>
        </View>
        {upcomingTasks.map((task, index) => (
          <TodoComp key={index} todo={task} />
        ))}
        {/* Completed Tasks */}
        <View style={styles.titleContainer}>
          <VerticalDividerComp width={4} color={colors.green} height={30} />
          <Text style={styles.titleText}>Completed</Text>
        </View>
        {completedTasks.map((task, index) => (
          <TodoComp key={index} todo={task} />
        ))}
      </ScrollView>

      <FilterComp />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.NewTodo);
        }}
        style={styles.addButton}>
        <icons.addIcon color={colors.white} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: '100%',
    paddingHorizontal: PixelRatio.roundToNearestPixel(10),
    paddingVertical: PixelRatio.roundToNearestPixel(5),
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  addButton: {
    backgroundColor: colors.vividBlue,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
