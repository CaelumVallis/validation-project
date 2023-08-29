import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {},
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addValues: (state, action) => {
      console.log(action.payload);
      state.values = action.payload;
    },
  },
});

export const { addValues } = formDataSlice.actions;

export default formDataSlice.reducer;
