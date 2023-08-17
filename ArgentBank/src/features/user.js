import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.password = null;
    },
  },
});

const { actions, reducer } = userSlice;

export const { login, logout } = actions;

export default reducer;
