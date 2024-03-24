import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import SharedPreference from '../helper/SharedPreference';
const combinedReducer=combineReducers({
    authReducer
})
const rootReducers = (state, action) => {
    if (action?.type === 'USER_LOGOUT') {
      console.log('401 Unauth');
      // SharedPreference.clearAllData();
      SharedPreference.multiRemove([
        SharedPreference.keys.IS_AUTHENTICATE,
        SharedPreference.keys.TOKEN,
      ]);
  
      state = undefined;
    }
  
    return combinedReducer(state, action);
  };
  const store = configureStore({
    reducer: rootReducers,
    //code for serialization
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  export default store;