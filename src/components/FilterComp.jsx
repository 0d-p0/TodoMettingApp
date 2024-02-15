import React, {useContext, useState} from 'react';
import {
  Modal,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../res/colors';
import HorizontalDivider from './HorizontalDivider';
import {AppStore} from '../context/AppContext';
import CalendarComp from './CalendarComp';
import {formatDate} from '../utils/formatedDate';

const FilterComp = () => {
  const {
    modalVisible,
    calendarVisible,
    changeModelVisibility,
    startDate,
    endDate,
    changeCalendarVisibility,
    setEndDate,
    setStartDate,
  } = useContext(AppStore);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          changeModelVisibility(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* title and button */}
            <View style={styles.top}>
              <TouchableOpacity onPress={() => changeModelVisibility(false)}>
                <Text
                  style={{
                    ...styles.title,
                    color: 'tomato',
                    fontWeight: 'bold',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              {/* title */}
              <Text style={styles.title}>Filter</Text>
              {/* Action Button */}
              <TouchableOpacity onPress={() => changeModelVisibility(false)}>
                <Text
                  style={{
                    ...styles.title,
                    color: colors.vividBlue,
                    fontWeight: 'bold',
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
            {/* Horizontal Divider */}
            <HorizontalDivider />
            {/* Date Picker  */}
            <View style={styles.datePickerContainer}>
              {/* Start Date */}
              <View style={styles.date}>
                <Text style={styles.dateTitle}>Start Date</Text>
                <TouchableOpacity
                  onPress={() => {
                    changeCalendarVisibility({
                      visible: true,
                      isStartDate: true,
                    });
                  }}
                  style={styles.pickerButton}>
                  <Text style={styles.pickDateText}>
                    {formatDate(startDate)}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* End Date */}
              <View style={styles.date}>
                <Text style={styles.dateTitle}>End Date</Text>
                <TouchableOpacity
                  onPress={() => {
                    changeCalendarVisibility({
                      visible: true,
                      isStartDate: false,
                    });
                  }}
                  style={styles.pickerButton}>
                  {/* {Sat, 25 Dec 2023} */}
                  <Text style={styles.pickDateText}>{formatDate(endDate)}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* {"dateString": "2024-02-17", "day": 17, "month": 2, "timestamp": 1708128000000, "year": 2024} */}
      <CalendarComp
        calendarVisibility={calendarVisible.visible}
        handleDateSelect={date => {
          if (calendarVisible.isStartDate) {
            setStartDate(formatDate(date.timestamp));
          }

          if (!calendarVisible.isStartDate) {
            setEndDate(formatDate(date.timestamp));
          }
          changeCalendarVisibility({
            visible: false,
            isStartDate: true,
          });
        }}
      />
    </>
  );
};

export default FilterComp;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    width: '90%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 20,
    padding: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: PixelRatio.roundToNearestPixel(18),
    color: 'black',
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  date: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: PixelRatio.roundToNearestPixel(18),
  },
  pickerButton: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 20,
    padding: 5,
    margin: PixelRatio.roundToNearestPixel(10),
  },
  pickDateText: {
    color: 'black',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
});
