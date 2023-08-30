import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addValues: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addValues } = formDataSlice.actions;

export default formDataSlice.reducer;
