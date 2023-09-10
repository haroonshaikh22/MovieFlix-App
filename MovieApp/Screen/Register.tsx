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
import {RequestTokenApi} from '../redux/api/new/RequestTokenApi';
import {SessionIdApi} from '../redux/api/new/SessionIdApi';

const Register = (props: any) => {
  const dispatch = useDispatch();
  // const RegisterApis = useSelector(state => state?.Register);
  const RequestTokenCalled = useSelector(state => state?.RequestToken);
  const SessionIdCalled = useSelector(state => state?.SessionId);

  // User Form
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});

  //RequestToken
  const [requestCall, setRequestCall] = useState(false);
  const [reqToken, setReqToken] = useState('');
  //Session Id
  const [sessionIdCall, setSessionIdCall] = useState(false);
  const [sessionId, setSessionId] = useState('');

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

      dispatch(RequestTokenApi());
      setRequestCall(true);
    }
  };

  // Request Token
  useEffect(() => {
    if (
      RequestTokenCalled?.isLoaded &&
      RequestTokenCalled?.success &&
      requestCall
    ) {
      console.log('success', RequestTokenCalled);
      setReqToken(RequestTokenCalled?.data?.request_token);
      const Url = `https://www.themoviedb.org/authenticate/${RequestTokenCalled?.data?.request_token}?redirect_to`;
      Linking.openURL(Url).catch(error => console.log(error));
    } else if (RequestTokenCalled?.isLoaded && !RequestTokenCalled?.success) {
      console.log('failed', RequestTokenCalled);
    }
  }, [RequestTokenCalled]);

  //Submit User Data and Create Session_id

  useEffect(() => {
    if (
      SessionIdCalled?.isLoaded &&
      SessionIdCalled?.success &&
      sessionIdCall
    ) {
      setSessionId(SessionIdCalled?.data?.session_id);
      console.log('user success', SessionIdCalled);
      const userdata = {
        userName: userName,
        password: password,
        email: email,
        mobile: mobile,
        sessionId: SessionIdCalled?.data?.session_id,
      };

      storeData(userdata);

      setSessionIdCall(false);
      props?.navigation.navigate('Login');
      //
    } else if (
      SessionIdCalled?.isLoaded &&
      !SessionIdCalled?.success &&
      sessionIdCall
    ) {
      setSessionIdCall(false);
      console.log('failed user', SessionIdCalled);
    }
  }, [SessionIdCalled]);

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
      dispatch(SessionIdApi(reqToken));
      setSessionIdCall(true);
    } else {
      console.log('inval');
    }
  };

  const ErrorText = text => {
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
      <Text
        style={{
          marginTop: '20%',
          fontWeight: '700',
          fontSize: 32,
          color: '#FFFFFF',
        }}>
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
            {errors?.userName}
          </Text>
        )}

        <TextInputBox
          keyboardType={'email-address'}
          placeholder={'Email'}
          value={email}
          onChangeText={dat => setEmail(dat)}
        />
        {errors?.email && <ErrorText text={errors?.email} />}
        <TextInputBox
          secureTextEntry={true}
          keyboardType={'visible-password'}
          placeholder={'Password'}
          value={password}
          onChangeText={dat => setPassword(dat)}
        />
        {errors?.password && <ErrorText text={errors?.password} />}
        <TextInputBox
          placeholder={'Confirm Password'}
          value={confirmPassword}
          onChangeText={dat => setConfirmPassword(dat)}
        />
        {errors?.comfirmPassword && (
          <ErrorText text={errors?.comfirmPassword} />
        )}
        <TextInputBox
          maxLength={10}
          keyboardType={'phone-pad'}
          placeholder={'Mobile Number'}
          value={mobile}
          onChangeText={dat => setMobile(dat)}
        />
        {errors?.mobile && <ErrorText text={errors?.mobile} />}
      </View>

      <SubmitButton title={'Register'} SubmitHandler={handleRegistration} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
