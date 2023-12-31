import {UserRegister} from '../api/UserRegisterApi';

const {createSlice} = require('@reduxjs/toolkit');

const UserRegisterSlice = createSlice({
  name: 'UserRegister',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(UserRegister.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(UserRegister.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default UserRegisterSlice.reducer;
