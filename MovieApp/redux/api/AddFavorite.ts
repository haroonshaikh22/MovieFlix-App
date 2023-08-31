import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const AddFavoriteUrl = `${BaseUrl}/account/20287764/favorite?api_key=${API_KEY}`;

export const AddFavorite = createAsyncThunk('AddFavorite', async data => {
  console.log(data, 'dtofav tokkken');
  const options = {
    method: 'post',
    url: AddFavoriteUrl,
    params: {session_id: data?.sessionId},
    data: {media_type: 'movie', media_id: data?.movieId, favorite: true},
  };

  console.log(options, 'op---');

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error, 'error AddFav');
    return {};
  }
});
