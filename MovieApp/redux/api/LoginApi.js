import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const LoginUrl = `${BaseUrl}/authentication/session/new?api_key=${API_KEY}`;

export const LoginUser = createAsyncThunk('Login User', async params => {
  const options = {
    method: 'post',
    url: LoginUrl,
    data: {request_token: '3790a5c06e2887147582601c2f2e0341f4451816'},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
});
