const {configureStore} = require('@reduxjs/toolkit');

import TrendingReducer from './slice/TrendingSlice';
import RegisterReducer from './slice/RegisteSlice';
import UserRegisterReducer from './slice/UserRegisterSlice';
import LoginuserReducer from './slice/LoginSlice';
import WatchListsReducer from './slice/WatchListsSlice';
import AddWatchListReducer from './slice/AddWatchListSlice';
import FavoriteListReducer from './slice/FavoriteListSlice';
import AddFavoriteReducer from './slice/AddFavoriteSlice';
import RequestTokenReducer from './slice/new/RequestTokenSlice';
import SessionIdReducer from './slice/new/SessionIdSlice';

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
    RequestToken: RequestTokenReducer,
    SessionId: SessionIdReducer,
  },
});
