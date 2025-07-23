import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../features/onboardingSlice';

import StepIndicator from '../components/StepIndicator';
import StepForm1 from '../components/StepForm1';
import StepForm2 from '../components/StepForm2';
import StepForm3 from '../components/StepForm3';
import StepForm4 from '../components/StepForm4';
import StepForm5 from '../components/StepForm5';

const Onboarding = () => {
  const currentStep = useSelector((state) => state.onboarding.step);
  const dispatch = useDispatch();

  const handleStepClick = (step) => {
    dispatch(setStep(step));
  };

  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <StepForm1 />;
      case 2:
        return <StepForm2 />;
      case 3:
        return <StepForm3 />;
      case 4:
        return <StepForm4 />;
      case 5:
        return <StepForm5 />;
      default:
        return <StepForm1 />;
    }
  };

  return (
    <div className="onboarding-container" style={{ padding: '20px' }}>
      <h2>Onboarding Flow</h2>
      <StepIndicator currentStep={currentStep} onStepClick={handleStepClick} />
      <div className="form-container" style={{ marginTop: '20px' }}>
        {renderStepForm()}
      </div>
    </div>
  );
};

export default Onboarding;
