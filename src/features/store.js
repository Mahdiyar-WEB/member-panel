import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    userDetails: userSlice
  },
});

export default store;