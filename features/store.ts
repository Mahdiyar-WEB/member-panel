import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    userDetails: userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;