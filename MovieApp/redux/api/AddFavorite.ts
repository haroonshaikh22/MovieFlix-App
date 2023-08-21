import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const AddFavoriteUrl = `${BaseUrl}/account/20287764/favorite?api_key=${API_KEY}`;

export const AddFavorite = createAsyncThunk(
  'AddFavorite',
  async (session_id, media_id) => {
    console.log(session_id, media_id, 'dtofav tokkken');
    const options = {
      method: 'post',
      url: AddFavoriteUrl,
      params: {session_id: session_id},
      data: {media_type: 'movie', media_id: media_id, favorite: true},
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error, 'user');
      return {};
    }
  },
);
