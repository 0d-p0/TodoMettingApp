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
import ButtonComp from '../components/ButtonComp';
const NotifiactionScreen = ({navigation}) => {
  return (
    <>
      {/* Header container */}
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
        <Text style={styles.headerText}>Notifiaction</Text>
      </View>

      {/* Notification list */}

      <View>
        <View style={styles.container}>
          {/* Date  */}
          <View style={styles.nameContainer}>
            <Text
              style={{fontWeight: 'bold', color: colors.white, fontSize: 28}}>
              A
            </Text>
          </View>

          <View style={styles.todoContainer}>
            {/* Todo details */}
            <View style={styles.todo}>
              <Text style={styles.todoTitle} numberOfLines={1}>
                ABhishek schedule a Metting on 4th Saturday, 2024{' '}
              </Text>
              <Text style={styles.todoDate}>4th Saturday, 2024</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <ButtonComp
            style={{backgroundColor: 'red', width: 'auto'}}
            textStyle={{fontSize: 16}}
            title={'Decline'}
          />

          <ButtonComp
            style={{width: 'auto'}}
            textStyle={{fontSize: 16}}
            title={'Accept'}
          />
        </View>
      </View>
    </>
  );
};

export default NotifiactionScreen;

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    position: 'absolute',
    left: '40%',
  },
  container: {
    margin: PixelRatio.roundToNearestPixel(5),
    flexDirection: 'row',
    columnGap: 5,
  },
  nameContainer: {
    flex: 25,
    backgroundColor: colors.brown,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
