const {createSlice} = require('@reduxjs/toolkit');
const {FetchFavoriteList} = require('../api/FetchFavoriteList');

const FavoriteSlice = createSlice({
  name: 'FavoriteList',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(FetchFavoriteList.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(FetchFavoriteList.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default FavoriteSlice.reducer;
