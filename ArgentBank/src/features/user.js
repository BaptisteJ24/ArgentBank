import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
    },
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload.user;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setUser, updateUserSuccess, updateUserFailure } = actions;

export default reducer;
