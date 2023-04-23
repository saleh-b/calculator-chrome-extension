import { combineReducers, configureStore } from '@reduxjs/toolkit';
import equation from './equation';
const rootReducer = combineReducers({ equation });
const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
