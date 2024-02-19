import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
