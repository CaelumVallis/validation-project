import { configureStore } from '@reduxjs/toolkit';
import formData from './formDataSlice';

const store = configureStore({
  reducer: {
    formData,
  },
});

export default store;
