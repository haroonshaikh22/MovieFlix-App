import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../../config/const';

const SessionIdUrl = `${BaseUrl}/authentication/session/new?api_key=${API_KEY}`;

export const SessionIdApi = createAsyncThunk('SessionId', async params => {
  console.log(params, 'dtoken');
  const options = {
    method: 'post',
    url: SessionIdUrl,
    data: {request_token: params},
  };

  console.log(options, 'oooo');

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error, 'Session Id');
    return {};
  }
});
