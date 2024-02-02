
// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
// import cartReducer from './cartSlice';

// // const store = configureStore({
// //   reducer: {
// //     product: productReducer,
// //     cart: cartReducer,
// //   },
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;


// export default store;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

// import registrationReducer from './registrationSlice';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,

  // registration: registrationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
