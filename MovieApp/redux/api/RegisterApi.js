import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const RegisterUrl = `${BaseUrl}/authentication/token/new?api_key=${API_KEY}`;

export const GetToken = createAsyncThunk('GetToekn', async params => {
  const options = {
    method: 'get',
    url: RegisterUrl,
    params: params,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
});
