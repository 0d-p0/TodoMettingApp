import {Image, PixelRatio, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import loginImg from '../res/images/loginimg.png';
import {colors} from '../res/colors';
import TextInputComp from '../components/TextInputComp';
import {icons} from '../res/icon/icons';
import ButtonComp from '../components/ButtonComp';
import auth from '@react-native-firebase/auth';
import {showToast} from '../utils/ShowToast';

const iconSize = 25;
const iocnColor = colors.brown;
const LoginScreen = () => {
  // Handle the button press
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      if (timer) {
        return showToast({message: `pleas wait ${30 - timer}`});
      }
      handleStartTimer();

      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      setTimer(null);
      showToast({message: 'error occur'});
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
      showToast({message: 'Invalid Code'});
    }
  }

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer !== null && timer <= 30) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);

  useEffect(() => {
    if (timer === 30) {
      console.log('Timer expired!');
      setTimer(null);
    }
  }, [timer]);

  const handleStartTimer = () => {
    setTimer(1); // Start the timer with 1 second
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <Image style={styles.img} source={loginImg} resizeMode="contain" />
      <TextInputComp
        placeholder={'Mobile No.'}
        btnText={'Send Code'}
        showButton={true}
        value={phoneNumber}
        onchnageValue={setPhoneNumber}
        onPress={() => {
          signInWithPhoneNumber(`+91${phoneNumber}`);
        }}>
        <icons.usersIcon color={iocnColor} size={iconSize} />
      </TextInputComp>
      <TextInputComp
        placeholder={'Enter OTP'}
        value={code}
        onchnageValue={setCode}
        keyboardType="number-pad">
        <icons.keyIcon color={iocnColor} size={iconSize} />
      </TextInputComp>
      {confirm && <ButtonComp title={'Login'} onPress={confirmCode} />}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '100%',
    paddingVertical: PixelRatio.roundToNearestPixel(100),
    paddingHorizontal: PixelRatio.roundToNearestPixel(20),
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    color: colors.vividBlue,
    letterSpacing: 2,
  },
  img: {
    height: '60%',
    width: '80%',
    resizeMode: 'center',
  },
});
