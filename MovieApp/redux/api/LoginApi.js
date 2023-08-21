import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const LoginUrl = `${BaseUrl}3/authentication/session/new?api_key=${API_KEY}`;

export const LoginUser = createAsyncThunk('Login User', async params => {
  const options = {
    method: 'POST',
    url: LoginUrl,
    body: {request_token: 'd281da7febf6f46b7fe345ad512a0f6dc72035ff'},
  };

  try {
    const response = await axios.request(options);
    console.log(response, 'resppmm');
    return response.data;
  } catch (error) {
    console.log(error, 'error');
    return {};
  }
});
