/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputBox from '../components/TextInputBox';
import {Colors} from '../constant';
import SubmitButton from '../components/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser} from '../redux/api/LoginApi';

const Login = (props: any) => {
  const dispatch = useDispatch();
  const LoginUserApi = useSelector(state => state?.LoginUser);

  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('session_token', value);
      console.log('stroage success');
    } catch (e) {
      // saving error
      console.log('stroage faild');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_data');

      const Data = JSON.parse(jsonValue);
      setToken(Data.reqToken);
      console.log(Data.reqToken, 'token req----hhh');

      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('failed get data');
    }
  };

  console.log(LoginUserApi, 'api---');

  const LoginHandler = () => {
    props.navigation.navigate('Home');
    // dispatch(LoginUser(token));
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginTop: '20%', width: '90%'}}>
        <TextInputBox placeholder={'User Name'} />
        <TextInputBox placeholder={'Password'} />
      </View>

      <SubmitButton title={'Login'} SubmitHandler={() => LoginHandler()} />

      <TouchableOpacity
        style={{width: '25%', borderWidth: 1, marginTop: '10%'}}
        onPress={() => props?.navigation?.navigate('Register')}>
        <Text>Register?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
