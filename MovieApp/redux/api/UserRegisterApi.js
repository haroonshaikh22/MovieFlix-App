import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const UserRegisterUrl = `${BaseUrl}/authentication/session/new?api_key=${API_KEY}`;

export const UserRegister = createAsyncThunk('UserRegister', async params => {
  const options = {
    method: 'post',
    url: UserRegisterUrl,
    // params: `request_token: ${params}`,
    data: {request_token: params},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error, 'userRegister');
    return {};
  }
});
