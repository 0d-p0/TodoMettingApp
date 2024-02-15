import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../res/colors';
import {icons} from '../res/icon/icons';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../routes/navigation.routes';
const TodoComp = ({todo}) => {
  const navigation = useNavigation();
  const dateObj = new Date(todo.date);
  // Get the day and date from the date object
  const day = dateObj.toLocaleDateString('en-US', {weekday: 'short'});
  const date = dateObj.getDate();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routes.TodoDetails, {
          todo: todo,
        });
      }}
      style={styles.container}>
      {/* Date  */}
      <View style={styles.dateContainer}>
        <Text style={styles.dayText}>{day}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      <View style={styles.todoContainer}>
        {/* Todo details */}
        <View style={styles.todo}>
          <Text style={styles.todoTitle}>{todo.title} </Text>
          <Text style={styles.todoDate}>
            {todo.startTime} - {todo.endTime}
          </Text>
        </View>
        {/* User Count  */}
        <View style={styles.user}>
          <icons.userIcon color={colors.skyBlue} size={20} />
          <Text style={{...styles.todoDate, color: colors.steelBlue}}>
            {todo?.assignedTo?.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoComp;

const styles = StyleSheet.create({
  container: {
    margin: PixelRatio.roundToNearestPixel(5),
    flexDirection: 'row',
    columnGap: 5,
  },
  dateContainer: {
    flex: 15,
    gap: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color: colors.dark_grey,
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
  dateText: {
    color: 'black',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
  todoContainer: {
    flex: 95,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: PixelRatio.roundToNearestPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  todoDate: {
    color: colors.dark_grey,
    fontSize: 14,
    fontWeight: '400',
  },
  user: {
    flexDirection: 'row',
    gap: 2,
  },
});
