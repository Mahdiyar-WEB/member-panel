import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  token: "",
  loggedIn: false,
  userPanel: {
    openProfile: false,
    openWallet: false,
  },
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    handleLoggedIn: (state) => {
      state.loggedIn = true;
    },
    handleLoggedOut: (state) => {
      state.loggedIn = false;
    },
    handleToggleProfile: (state) => {
      state.userPanel.openProfile = !state.userPanel.openProfile;
    },
    handleToggleWallet: (state) => {
      state.userPanel.openWallet = !state.userPanel.openWallet;
    },
  },
});

export const {
  handleLoggedIn,
  handleLoggedOut,
  handleToggleProfile,
  handleToggleWallet,
} = userSlice.actions;
export default userSlice.reducer;
