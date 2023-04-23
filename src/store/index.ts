import { configureStore } from '@reduxjs/toolkit';
import equation from './equation';

const store = configureStore({
  reducer: { equation },
});

export default store;
