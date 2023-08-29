import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {},
});

// export const {} = counterSlice.actions;

export default counterSlice.reducer;
