import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const AddFavoriteUrl = `${BaseUrl}/account/20287764/favorite?api_key=${API_KEY}`;

export const AddFavorite = createAsyncThunk('AddFavorite', async data => {
  const options = {
    method: 'post',
    url: AddFavoriteUrl,
    params: {session_id: data?.sessionId},
    data: {media_type: 'movie', media_id: data?.movieId, favorite: true},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {};
  }
});
