import {LoginUser} from '../api/LoginApi';

const {createSlice} = require('@reduxjs/toolkit');

const LoginSlice = createSlice({
  name: 'Login',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default LoginSlice.reducer;
