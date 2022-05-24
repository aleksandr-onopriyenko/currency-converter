import { configureStore } from '@reduxjs/toolkit';
import currencySlice from '../feature/currency/currencySlice';
import { apiSlice } from '../api/sliceAPI';

const store = configureStore({
  reducer: {
    currency: currencySlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
