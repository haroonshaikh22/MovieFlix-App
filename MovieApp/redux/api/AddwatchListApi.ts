import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const AddWatchUrl = `${BaseUrl}/account/20287764/watchlist?api_key=${API_KEY}`;

export const AddWatchList = createAsyncThunk('AddWatchList', async data => {
  console.log(data, 'dkkkptoken==---');
  const options = {
    method: 'post',
    url: AddWatchUrl,
    params: {session_id: data?.sessionId},
    data: {media_type: 'movie', media_id: data?.movieId, watchlist: true},
  };

  console.log(options, 'oooo');

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error, 'Watch list');
    return {};
  }
});
