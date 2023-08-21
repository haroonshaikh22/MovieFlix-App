import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const AddWatchUrl = `${BaseUrl}/account/20287764/watchlist?api_key=${API_KEY}`;

export const AddWatchList = createAsyncThunk(
  'AddWatchList',
  async (session_id, media_id) => {
    console.log(session_id, media_id, 'dkkkptoken');
    const options = {
      method: 'post',
      url: AddWatchUrl,
      params: {session_id: session_id},
      data: {media_type: 'movie', media_id: media_id, watchlist: true},
    };

    console.log(options, 'oooo');

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error, 'user');
      return {};
    }
  },
);
