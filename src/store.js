import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './features/onboardingSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});
