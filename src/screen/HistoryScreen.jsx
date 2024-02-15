import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {icons} from '../res/icon/icons';
import {colors} from '../res/colors';
const HistoryScreen = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 10,
          backgroundColor: colors.white,
        }}>
        {/* Header */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <icons.backIcon color={'black'} size={45} />
        </TouchableOpacity>
        <Text style={styles.headerText}>History</Text>
      </View>

      {/* History list */}
      <View style={styles.container}>
        {/* Date  */}
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}>Fri</Text>
          <Text style={styles.dateText}>3</Text>
        </View>

        <View style={styles.todoContainer}>
          {/* Todo details */}
          <View style={styles.todo}>
            <Text style={styles.todoTitle} numberOfLines={1}>
              ABhishek schedule a Metting on 4th Saturday, 2024{' '}
            </Text>
            <Text style={styles.todoDate}>Click for Details</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    position: 'absolute',
    left: '45%',
  },
  container: {
    margin: PixelRatio.roundToNearestPixel(5),
    flexDirection: 'row',
    columnGap: 5,
  },
  dateContainer: {
    flex: 10,
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
