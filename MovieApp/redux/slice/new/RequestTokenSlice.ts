import {RequestTokenApi} from '../../api/new/RequestTokenApi';

const {createSlice} = require('@reduxjs/toolkit');

const RequestTokenSlice = createSlice({
  name: 'RequestToken',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(RequestTokenApi.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(RequestTokenApi.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default RequestTokenSlice.reducer;
