/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import UserIcon from 'react-native-vector-icons/SimpleLineIcons';
import EyeIcon from 'react-native-vector-icons/Feather';
import CheckBox from 'react-native-vector-icons/Fontisto';
import {Color} from './constant/colors';
import axios from 'axios';

const Register = (props: any, navigation) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [check, setCheck] = useState(false);

  let data = JSON.stringify({
    email: 'someone@email.com',
    password: 'iOqzhqNcAKOjeQetrRwL',
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://ngoqknjpqqrupobpjvnb.supabase.co/auth/v1/signup',
    headers: {
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3FrbmpwcXFydXBvYnBqdm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NjU4MDQsImV4cCI6MjAwNzQ0MTgwNH0.cc0paLjQAZXeCNZXqkzsjQThTvuWk9OrLRUV4D7mlCY',
      'Content-Type': 'application/json',
      Cookie:
        'sb-access-token=eyJhbGciOiJIUzI1NiIsImtpZCI6InZ0dmNJUHl5NjRIVzhJUEEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkyMDIwNzU2LCJpYXQiOjE2OTIwMTcxNTYsImlzcyI6Imh0dHBzOi8vbmdvcWtuanBxcXJ1cG9icGp2bmIuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImRjOGU3YjMzLWI3NjEtNGJlZS04OTM5LWQxODc3NGQzMWFmYyIsImVtYWlsIjoiaGFyZGlrQHRlc3QuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTIwMTcxNTZ9XSwic2Vzc2lvbl9pZCI6IjgwZGRmYTVlLTI1ZTYtNDQ4ZC1hNTI4LWVhMjdiYTljOTM4YyJ9.zCKEW4lIj0cYn7zcIAEukyMp9gkZwLDSOHASt6DObxk; sb-refresh-token=dq7H-xciLo-ml8CG0ffgYA',
    },
    data: data,
  };

  const CalledApi = () => {
    props.navigation.navigate('Home');
    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        navigation.navigate('LoginIn');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./assets/kavacImage.png')}
          style={{width: 294, height: 294}}
        />

        <View
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: '80%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderColor: '#A6A6A6',
              marginTop: '5%',
            }}>
            <UserIcon name="user" size={24} />
            <TextInput
              value={userName}
              placeholder="Username"
              style={{width: '90%', marginLeft: 5}}
              onChangeText={i => setUsername(i)}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              width: '80%',
              marginTop: '10%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderColor: '#A6A6A6',
            }}>
            <UserIcon name="lock" size={24} />
            <TextInput
              value={password}
              placeholder="Password"
              style={{width: '80%', marginLeft: 5}}
              onChangeText={i => setPassword(i)}
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <EyeIcon name={showPass ? 'eye' : 'eye-off'} size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => CalledApi()}
          style={{
            width: '77%',
            backgroundColor: Color.primary,
            height: 42,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '8%',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
