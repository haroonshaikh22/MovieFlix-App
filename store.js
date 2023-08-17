const {configureStore} = require('@reduxjs/toolkit');

import TrendingReducer from './MovieApp/redux/slice/TrendingSlice';
import RegisterReducer from './MovieApp/redux/slice/RegisteSlice';
import UserRegisterReducer from './MovieApp/redux/slice/UserRegisterSlice';
import LoginuserReducer from './MovieApp/redux/slice/LoginSlice';

export const store = configureStore({
  reducer: {
    Trendings: TrendingReducer,
    Register: RegisterReducer,
    UserRegister: UserRegisterReducer,
    LoginUser: LoginuserReducer,
  },
});
