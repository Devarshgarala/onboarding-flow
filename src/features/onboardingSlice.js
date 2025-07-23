import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  formData: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
  },
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    saveStepData: (state, action) => {
      const { stepKey, data } = action.payload;
      state.formData[stepKey] = data;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { saveStepData, setStep } = onboardingSlice.actions;
export default onboardingSlice.reducer;
