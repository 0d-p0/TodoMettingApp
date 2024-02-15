import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {AppStore} from '../context/AppContext';

const CalendarComp = ({handleDateSelect, calendarVisibility}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dayPress = date => {
    setSelectedDate(date.dateString);
  };

  const {changeModelVisibility} = useContext(AppStore);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={calendarVisibility}
      onRequestClose={() => {
        changeModelVisibility(false);
      }}>
      <View style={styles.container}>
        <Calendar
          onDayPress={date => {
            dayPress(date);
            handleDateSelect(date);
          }}
          markedDates={selectedDate ? {[selectedDate]: {selected: true}} : {}}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalendarComp;
