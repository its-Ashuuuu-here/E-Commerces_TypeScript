// registrationSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface RegistrationState {
  isRegistered: boolean;
}

const initialState: RegistrationState = {
  isRegistered: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerSuccess: (state) => {
      state.isRegistered = true;
    },
    resetRegistration: (state) => {
      state.isRegistered = false;
    },
    logout: (state) => {
      state.isRegistered = false;
    },
  },
});

export const { registerSuccess, resetRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;
