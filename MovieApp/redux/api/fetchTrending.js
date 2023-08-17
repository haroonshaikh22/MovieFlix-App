import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const TrendingApi = `${BaseUrl}/trending/movie/day?api_key=${API_KEY}`;

export const FetchTrending = createAsyncThunk(
  'fetchTreanding',
  async (endPoints, params) => {
    const options = {
      method: 'get',
      url: TrendingApi,
      params: params,
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
