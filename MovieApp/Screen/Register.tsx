import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputBox from '../components/TextInputBox';
import SubmitButton from '../components/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {GetToken} from '../redux/api/RegisterApi';
import {UserRegister} from '../redux/api/UserRegisterApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = (props: any) => {
  const dispatch = useDispatch();
  const RegisterApis = useSelector(state => state?.Register);

  const [reqToken, setReqToken] = useState('');

  // User Form
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user_data', jsonValue);
      console.log('stroage success');
    } catch (e) {
      // saving error
      console.log('stroage faild');
    }
  };

  useEffect(() => {
    if (RegisterApis?.isLoaded && !RegisterApis?.error) {
      console.log(RegisterApis?.data?.request_token, 'reqtoken');

      setReqToken(RegisterApis?.data?.request_token);
      const userdata = {
        userName: userName,
        password: password,
        email: email,
        mobile: mobile,
        reqToken: reqToken,
      };

      storeData(userdata);
      console.log(userdata, 'data');
    } else {
      console.log('failed');
    }
  }, [RegisterApis]);

  const SubmitDetailsHandler = () => {
    if (userName !== '' && password !== '' && mobile !== '') {
      console.log('submit');
      dispatch(GetToken());
      props?.navigation?.navigate('Login');
    } else {
      ToastAndroid.show('Pl fill data', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: '20%', fontWeight: '700', fontSize: 32}}>
        Register
      </Text>

      <View style={{width: '90%'}}>
        <TextInputBox
          placeholder={'User Name'}
          value={userName}
          onChangeText={dat => setUserName(dat)}
        />
        <TextInputBox
          keyboardType={'email-address'}
          placeholder={'Email'}
          value={email}
          onChangeText={dat => setEmail(dat)}
        />
        <TextInputBox
          secureTextEntry={true}
          keyboardType={'visible-password'}
          placeholder={'Password'}
          value={password}
          onChangeText={dat => setPassword(dat)}
        />
        <TextInputBox
          placeholder={'Confirm Password'}
          value={confirmPassword}
          onChangeText={dat => setConfirmPassword(dat)}
        />
        <TextInputBox
          keyboardType={'phone-pad'}
          placeholder={'Mobile Number'}
          value={mobile}
          onChangeText={dat => setMobile(dat)}
        />
      </View>

      <SubmitButton title={'Register'} SubmitHandler={SubmitDetailsHandler} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
