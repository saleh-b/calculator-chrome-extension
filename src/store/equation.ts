import { createSlice } from '@reduxjs/toolkit';

const initialState = { equation: '' };

const equationSlice = createSlice({
  name: 'equation',
  initialState,
  reducers: {
    write: (state, action) => {
      state.equation + ' ' + action.payload;
    },
    calculate: (state, action) => {
      const str = state.equation.replace(/[^-()\d/*+.]/g, '');
      console.log(eval(str));
    },
  },
});

export const { write, calculate } = equationSlice.actions;
export default equationSlice.reducer;
