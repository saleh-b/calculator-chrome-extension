import { createSlice } from '@reduxjs/toolkit';

const initialState = { equation: '' };

const equationSlice = createSlice({
  name: 'equation',
  initialState,
  reducers: {
    write: (state, action) => {
      if (action.payload === 'C') {
        state.equation = '';
      } else {
        state.equation = state.equation + action.payload;
      }
    },
    calculate: (state) => {
      const str = state.equation;
      state.equation = state.equation + '=' + eval(str);
    },
  },
});

export const { write, calculate } = equationSlice.actions;
export default equationSlice.reducer;
