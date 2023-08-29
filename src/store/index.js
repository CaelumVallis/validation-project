import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';

const store = configureStore({
  reducer: {
    formDataReducer,
  },
});

export default store;
