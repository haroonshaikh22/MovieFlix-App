import {SessionIdApi} from '../../api/new/SessionIdApi';

const {createSlice} = require('@reduxjs/toolkit');

const SessionIdSlice = createSlice({
  name: 'SessionId',
  initialState: {
    data: null,
    error: false,
    error_message: null,
    isLoaded: false,
    success: false,
  },

  extraReducers: (builder: any) => {
    builder.addCase(SessionIdApi.fulfilled, (state: any, action: any) => {
      state.isLoaded = true;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(SessionIdApi.rejected, (state: any, action: any) => {
      state.isLoaded = true;
      state.success = false;
      state.error = true;
      state.error_message = action.error;
    });
  },
});

export default SessionIdSlice.reducer;
