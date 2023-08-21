import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, BaseUrl} from '../../config/const';

const WatchListUrl = `${BaseUrl}/account/20287764/watchlist/movies?api_key=${API_KEY}`;

export const FetchWatchLists = createAsyncThunk(
  'fetchWatchlist',
  async session_id => {
    const options = {
      method: 'get',
      url: WatchListUrl,
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
