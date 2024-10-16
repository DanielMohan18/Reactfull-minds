// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';
// import { persistReducer } from 'redux-persist'; 
// import storage from 'redux-persist/lib/storage'; 

// const rootReducer = combineReducers({
//     name:userReducer,
// })

// const persistConfig ={
//     key:'root',
//     storage,
//     version:1
// };

// const persistedReducer = persistReducer(persistConfig,rootReducer);

// const store = configureStore({
//   reducer:persistedReducer,
//   middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

export default configureStore({
  reducer: {
    user:userReducer,
  }
})