/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputBox from '../components/TextInputBox';

import SubmitButton from '../components/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props: any) => {
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [sessionId, setSessionId] = useState('');

  const [getUserName, setGetUserName] = useState('');
  const [getPassword, setGetPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const isLogged = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('is_logged', jsonValue);
      console.log('stroage success');
      props?.navigation.navigate('Home', {jsonValue});
    } catch (e) {
      // saving error
      console.log('stroage faild');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_data');
      const Data = jsonValue != null ? JSON.parse(jsonValue) : null;

      setGetUserName(Data?.userName);
      setGetPassword(Data?.password);
      setSessionId(Data?.sessionId);

      return (
        jsonValue != null ? JSON.parse(jsonValue) : null,
        console.log(jsonValue, 'l')
      );
    } catch (e) {
      // error reading value
      console.log('failed get data');
    }
  };

  const Validation = () => {
    let newError = {};
    if (!userName || userName !== getUserName) {
      newError.userName = 'Enter Valid user name';
    }
    if (!password || password !== getPassword) {
      newError.password = 'Enter Correct password';
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = () => {
    getData();
    if (Validation()) {
      console.log('login');
      isLogged({getUserName, sessionId});
    } else {
      console.log('invaled');
    }
  };

  if (loading) {
    <View>
      <ActivityIndicator
        size={'large'}
        style={{position: 'absolute', justifyContent: 'center'}}
      />
    </View>;
  } else {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 38,
            fontWeight: '800',
            marginTop: '35%',
            textAlign: 'center',
            color: '#FFFFFF',
          }}>
          {'Welcome to \nThe Movie View'}
        </Text>
        <View style={{marginTop: '10%', width: '90%'}}>
          <TextInputBox
            placeholder={'User Name'}
            maxLength={12}
            value={userName}
            onFocus={error => setError(!error.userName)}
            onChangeText={text => setUserName(text)}
          />
          {error.userName && (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                marginLeft: '5%',
                color: 'orange',
              }}>
              {error.userName}
            </Text>
          )}
          <TextInputBox
            secureTextEntry={true}
            keyboardType={'visible-password'}
            placeholder={'Password'}
            value={password}
            onChangeText={dat => setPassword(dat)}
          />

          {error.password && (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                marginLeft: '5%',
                color: 'orange',
              }}>
              {error.password}
            </Text>
          )}
        </View>

        <SubmitButton title={'Login'} SubmitHandler={getData} />

        <TouchableOpacity
          style={{
            width: '25%',
            marginTop: '10%',
            alignSelf: 'flex-start',
            marginLeft: '5%',
          }}
          onPress={() => props?.navigation?.navigate('Register')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',

              alignSelf: 'center',
            }}>
            Register?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 38,
          fontWeight: '800',
          marginTop: '35%',
          textAlign: 'center',
          color: '#44226E',
        }}>
        {'Welcome to \nThe Movie View'}
      </Text>
      <View style={{marginTop: '10%', width: '90%'}}>
        <TextInputBox
          placeholder={'User Name'}
          maxLength={12}
          value={userName}
          onFocus={error => setError(!error.userName)}
          onChangeText={text => setUserName(text)}
        />
        {error.userName && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              marginLeft: '5%',
              color: 'orange',
            }}>
            {error.userName}
          </Text>
        )}
        <TextInputBox
          secureTextEntry={true}
          keyboardType={'visible-password'}
          placeholder={'Password'}
          value={password}
          onChangeText={dat => setPassword(dat)}
        />

        {error.password && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              marginLeft: '5%',
              color: 'orange',
            }}>
            {error.password}
          </Text>
        )}
      </View>

      <SubmitButton title={'Login'} SubmitHandler={handleSubmit} />

      <TouchableOpacity
        style={{
          width: '25%',
          marginTop: '10%',
          alignSelf: 'flex-start',
          marginLeft: '5%',
        }}
        onPress={() => props?.navigation?.navigate('Register')}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#44226E',
            alignSelf: 'center',
          }}>
          Register?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
