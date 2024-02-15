import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../res/colors';
import {icons} from '../res/icon/icons';
import ButtonComp from '../components/ButtonComp';
import TextInputComp from '../components/TextInputComp';
import RadioButtonComp from '../components/RadioButtonComp';
import HorizontalDivider from '../components/HorizontalDivider';
import TextViewComp from '../components/TextViewComp';

const TodoDetailsScreen = ({navigation, route}) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  //   {"assignedTo": ["John", "Alice", "Eva"], "date": "Thu, 18 Feb 2024", "endTime": "4:00 pm", "id": 5, "note": "Demo new features to potential clients.", "startTime": "3:00 pm", "title": "Product Demo"}
  const {todo} = route.params || {};

  console.log(todo?.note);
  return (
    <View style={styles.container}>
      {/* Todo title */}
      <TextViewComp value={todo?.title} textStyle={{color: 'black'}} />

      {/* Todo Date */}
      <View style={styles.todoDateContainer}>
        <HorizontalDivider />

        {/* All Day */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <icons.timeIcon color={'black'} size={20} />
            <Text style={styles.dateText}>All Day</Text>
          </View>
          <RadioButtonComp checked={checked} handlePress={handlePress} />
        </View>
        {/* Select Days  */}
        <View>
          {/* Start Date */}
          <View style={styles.date}>
            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>{todo?.date}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>{todo?.startTime}</Text>
            </TouchableOpacity>
          </View>

          {/* End Date */}
          <View style={styles.date}>
            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>{todo?.date}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>{todo?.endTime}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <HorizontalDivider />
        {/* Note Section */}

        <View>
          {/* Add Note title */}
          <View style={{flexDirection: 'row', gap: 10}}>
            <icons.noteIcon color={'black'} size={25} />
            <Text style={styles.dateText}>Note</Text>
          </View>
          <TextViewComp
            value={todo?.note}
            style={{
              with: '100%',
              marginTop: 2,
            }}
          />
        </View>

        <>
          {/* People */}
          <View style={{flexDirection: 'row', gap: 10}}>
            <icons.usersIcon color={'black'} size={25} />
            <Text style={styles.dateText}>People</Text>
          </View>
        </>

        <View style={{alignItems: 'flex-start', flexDirection: 'row', gap: 10}}>
          {todo &&
            todo?.assignedTo.map((props, index) => (
              <Text
                key={index}
                style={{
                  ...styles.pickerButton,
                  ...styles.dateText,
                  backgroundColor: colors.white,
                  elevation: 5,
                  padding: 10,
                }}>
                {props}
              </Text>
            ))}
        </View>
      </View>
    </View>
  );
};

export default TodoDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: PixelRatio.roundToNearestPixel(10),
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoDateContainer: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(20),
  },
  dateText: {
    color: 'black',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerButton: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: PixelRatio.roundToNearestPixel(5),
    margin: PixelRatio.roundToNearestPixel(5),
  },
  pickDateText: {
    color: 'black',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
});
