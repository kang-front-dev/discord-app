import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { friendsReducer } from './friendsReducer';
const rootReducer = combineReducers({
  friendsReducer,
});
export const store = configureStore({reducer: rootReducer,});
