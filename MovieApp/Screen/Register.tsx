/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Linking,
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
// import {UserRegister} from '../redux/api/UserRegisterApi';
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
  const [errors, setErrors] = useState({});
  // const [sessionId, setSessionId] = useState('');

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

  //Get Request Token API Called
  const GetRequestToken = () => {
    if (reqToken === '') {
      console.log('api token called');

      dispatch(GetToken());
    }
  };

  //Request Token
  useEffect(() => {
    console.log(RegisterApis);
    if (RegisterApis?.isLoaded && RegisterApis?.success) {
      console.log('success', RegisterApis);

      setReqToken(RegisterApis?.data?.request_token);
    } else if (RegisterApis?.isLoaded && !RegisterApis?.success) {
      console.log('failed', RegisterApis);
    }
  }, [RegisterApis]);

  //Submit User Data and Create Session_id

  // useEffect(() => {
  //   console.log(UserRegisterApi);
  //   if (UserRegisterApi?.isLoaded && UserRegisterApi?.success) {
  //     setSessionId(UserRegisterApi?.data?.session_id);
  //     console.log('user success', UserRegisterApi);
  //     const userdata = {
  //       userName: userName,
  //       password: password,
  //       email: email,
  //       mobile: mobile,
  //       sessionId: UserRegisterApi?.data?.session_id,
  //     };

  //     storeData(userdata);
  //     console.log(userdata, 'data');
  //     props?.navigation.navigate('Login');
  //   } else if (UserRegisterApi?.isLoaded && !UserRegisterApi?.success) {
  //     console.log('failed user', UserRegisterApi);
  //   }
  // }, [UserRegisterApi]);

  useEffect(() => {
    GetRequestToken();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!userName) {
      newErrors.userName = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (!confirmPassword || confirmPassword !== password) {
      newErrors.comfirmPassword = 'Enter Correct password';
    }
    if (!mobile || mobile.length < 10) {
      newErrors.mobile = 'Please Valid Mobile Number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Submit User Data and Create Session_id
  const handleRegistration = () => {
    if (validateForm()) {
      // Perform registration logic here
      const userdata = {
        userName: userName,
        password: password,
        email: email,
        mobile: mobile,
        reqToken: reqToken,
      };
      storeData(userdata);
      console.log('valid');
      const Url = `https://www.themoviedb.org/authenticate/${reqToken}?redirect_to`;
      Linking.openURL(Url).catch(error => console.log(error));
      props?.navigation?.navigate('Login');
    } else {
      console.log('inval');
    }
  };

  console.log(errors, 'error');

  console.log(reqToken, 'token');

  const ErrorText = text => {
    console.log(Object.values(text.text), 'errt');

    return (
      <Text
        style={{
          fontSize: 12,
          fontWeight: '400',
          marginLeft: '5%',
          color: 'orange',
        }}>
        {Object.values(text.text)}
      </Text>
    );
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: '20%', fontWeight: '700', fontSize: 32}}>
        Register
      </Text>

      <View style={{width: '90%'}}>
        <TextInputBox
          maxLength={12}
          placeholder={'User Name'}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        {errors.userName && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              marginLeft: '5%',
              color: 'orange',
            }}>
            {errors.userName}
          </Text>
        )}

        <TextInputBox
          keyboardType={'email-address'}
          placeholder={'Email'}
          value={email}
          onChangeText={dat => setEmail(dat)}
        />
        {errors.userName && <ErrorText text={errors} />}
        <TextInputBox
          secureTextEntry={true}
          keyboardType={'visible-password'}
          placeholder={'Password'}
          value={password}
          onChangeText={dat => setPassword(dat)}
        />
        {errors.userName && <ErrorText text={errors} />}
        <TextInputBox
          placeholder={'Confirm Password'}
          value={confirmPassword}
          onChangeText={dat => setConfirmPassword(dat)}
        />
        {errors.userName && <ErrorText text={errors} />}
        <TextInputBox
          maxLength={10}
          keyboardType={'phone-pad'}
          placeholder={'Mobile Number'}
          value={mobile}
          onChangeText={dat => setMobile(dat)}
        />
        {errors.userName && <ErrorText text={errors} />}
      </View>

      <SubmitButton title={'Register'} SubmitHandler={handleRegistration} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
