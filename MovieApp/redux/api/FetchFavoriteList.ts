import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const FavListUrl = `${BaseUrl}/account/20287764/favorite/movies?api_key=${API_KEY}`;

export const FetchFavoriteList = createAsyncThunk(
  'fetchFavlist',
  async session_id => {
    const options = {
      method: 'get',
      url: FavListUrl,
      params: {
        language: 'en-US',
        page: '1',
        session_id: session_id,
        sort_by: 'created_at.asc',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  },
);
