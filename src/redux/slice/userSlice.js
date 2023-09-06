import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: null,
  users: [],
  login: false,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    loadingUser: (state) => {
      state.loading = true;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    registerUser: (state, { payload }) => {
      state.loading = false;
      state.users.push(payload);
      state.error = null;
    },
    Logins: (state) => {
      state.login = true;
    },
    Logouts: (state) => {
      state.login = false;
    },
  },
});

export const {
  loadingUser,
  loginUser,
  registerUser,
  getError,
  Logins,
  Logouts,
} = userSlice.actions;

export default userSlice.reducer;
