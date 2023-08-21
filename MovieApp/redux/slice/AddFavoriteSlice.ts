import {AddFavorite} from '../api/AddFavorite';

const {createSlice} = require('@reduxjs/toolkit');

const AddFavoriteSlice = createSlice({
  name: 'AddFavorite',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
    success: false,
  },

  extraReducers: builder => {
    builder.addCase(AddFavorite.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(AddFavorite.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default AddFavoriteSlice.reducer;
