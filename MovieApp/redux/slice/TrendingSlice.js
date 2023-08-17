const {createSlice} = require('@reduxjs/toolkit');
const {FetchTrending} = require('../api/fetchTrending');

const TrendingSlice = createSlice({
  name: 'Trendings',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(FetchTrending.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
    });
    builder.addCase(FetchTrending.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default TrendingSlice.reducer;
