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

const NewTodoScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      {/* Action Buttons 
       
       Close and Create

     */}
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <icons.closeIcon size={40} color={'black'} />
        </TouchableOpacity>
        <ButtonComp
          title={'Create'}
          style={{width: 'auto'}}
          textStyle={{
            fontSize: PixelRatio.roundToNearestPixel(16),
          }}
        />
      </View>
      {/* Todo title */}
      <TextInputComp placeholder={'Add Title'} />

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
              <Text style={styles.pickDateText}>Sat, 25 Dec 2023</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>12:30 pm</Text>
            </TouchableOpacity>
          </View>

          {/* End Date */}
          <View style={styles.date}>
            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>Sat, 25 Dec 2023</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerButton}>
              <Text style={styles.pickDateText}>12:30 pm</Text>
            </TouchableOpacity>
          </View>
        </View>
        <HorizontalDivider />
        {/* Note Section */}

        <View>
          {/* Add Note title */}
          <View style={{flexDirection: 'row', gap: 10}}>
            <icons.noteIcon color={'black'} size={25} />
            <Text style={styles.dateText}>Add Note</Text>
          </View>
          <TextInputComp
            style={{
              borderColor: colors.vividBlue,
              borderWidth: 1,
            }}
          />
        </View>

        <>
          {/* Add Note title */}
          <View style={{flexDirection: 'row', gap: 10}}>
            <icons.usersIcon color={'black'} size={25} />
            <Text style={styles.dateText}>Add People</Text>
          </View>
          <TextInputComp
            placeholder={'Search People'}
            style={{paddingVertical: PixelRatio.roundToNearestPixel(0)}}
            textStyle={{color: colors.dark_grey, fontSize: 16}}
          />
        </>

        <HorizontalDivider />
        <View style={{alignItems: 'flex-start', gap: 10}}>
          <Text style={[styles.pickerButton, styles.dateText]}>Pritam</Text>
        </View>
      </View>
    </View>
  );
};

export default NewTodoScreen;

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
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 20,
    padding: PixelRatio.roundToNearestPixel(10),
    margin: PixelRatio.roundToNearestPixel(10),
  },
  pickDateText: {
    color: 'black',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(16),
  },
});
