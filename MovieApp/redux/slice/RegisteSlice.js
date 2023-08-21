import {GetToken} from '../api/RegisterApi';

const {createSlice} = require('@reduxjs/toolkit');

const RegisterSlice = createSlice({
  name: 'Register',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
  },

  extraReducers: builder => {
    builder.addCase(GetToken.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(GetToken.rejected, (state, action) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default RegisterSlice.reducer;
