import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = false;

const slice = createSlice({
  name: 'enableHeaderMenu',
  initialState,
  reducers: {
    enableHeaderMenu(state, action: PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

export const {enableHeaderMenu} = slice.actions;

export default slice.reducer;
