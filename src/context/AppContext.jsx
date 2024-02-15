import {createContext, useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {showToast} from '../utils/ShowToast';

export const AppStore = createContext();
const width = Dimensions.get('screen').width;

const AppContext = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState({
    visible: false,
    isStartDate: true,
  });

  const currentDate = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);

  function changeModelVisibility(modalVisible) {
    setModalVisible(modalVisible);
  }

  function changeCalendarVisibility(calendarVisible) {
    setCalendarVisible(calendarVisible);
  }

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      console.log('user is ', user);
      if (user.phoneNumber) {
        showToast({message: 'Login Success'});
        setIsLogin(true);
      }
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <AppStore.Provider
      value={{
        isLogin,
        modalVisible,
        calendarVisible,
        startDate,
        endDate,
        changeModelVisibility,
        changeCalendarVisibility,
        setEndDate,
        setStartDate,
      }}>
      {children}
    </AppStore.Provider>
  );
};

export default AppContext;
