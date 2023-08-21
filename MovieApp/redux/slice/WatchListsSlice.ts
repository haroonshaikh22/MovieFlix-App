const {createSlice} = require('@reduxjs/toolkit');
const {FetchWatchLists} = require('../api/WatchListApi');

const WatchListsSlice = createSlice({
  name: 'WatchLists',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(FetchWatchLists.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(FetchWatchLists.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = true;
      state.error_message = action.error;
      state.success = false;
    });
  },
});

export default WatchListsSlice.reducer;
