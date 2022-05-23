import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  convertCurrency: null,
  currentCurrency: null,
  timeUpdateRate: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
});

export default currencySlice.reducer;
