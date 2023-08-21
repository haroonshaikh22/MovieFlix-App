const {AddWatchList} = require('../api/AddwatchListApi');

const {createSlice} = require('@reduxjs/toolkit');

const AddWatchListSlice = createSlice({
  name: 'AddWatchList',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(AddWatchList.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(AddWatchList.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default AddWatchListSlice.reducer;
