const {configureStore} = require('@reduxjs/toolkit');

import TrendingReducer from './MovieApp/redux/slice/TrendingSlice';
import RegisterReducer from './MovieApp/redux/slice/RegisteSlice';
import UserRegisterReducer from './MovieApp/redux/slice/UserRegisterSlice';
import LoginuserReducer from './MovieApp/redux/slice/LoginSlice';
import WatchListsReducer from './MovieApp/redux/slice/WatchListsSlice';
import AddWatchListReducer from './MovieApp/redux/slice/AddWatchListSlice';
import FavoriteListReducer from './MovieApp/redux/slice/FavoriteListSlice';
import AddFavoriteReducer from './MovieApp/redux/slice/AddFavoriteSlice';

export const store = configureStore({
  reducer: {
    Trendings: TrendingReducer,
    Register: RegisterReducer,
    UserRegister: UserRegisterReducer,
    LoginUser: LoginuserReducer,
    WatchLists: WatchListsReducer,
    AddWatchLists: AddWatchListReducer,
    FavoriteList: FavoriteListReducer,
    AddFavorite: AddFavoriteReducer,
  },
});
