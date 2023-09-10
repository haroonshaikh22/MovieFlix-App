import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = (props: any) => {
  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('is_logged');
      const Data = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (Data !== '') {
        props?.navigation?.navigate('Home', {Data});
      } else {
        props?.navigation?.navigate('Login', {Data});
      }

      return (
        jsonValue != null ? JSON.parse(jsonValue) : null,
        console.log(jsonValue, 'l')
      );
    } catch (e) {
      // error reading value
      console.log('failed get data');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotate: '90deg'}],
      }}>
      <LottieView
        source={require('../assets/loadingMovie.json')}
        autoPlay
        loop
        style={{height: 600, width: 200}}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
