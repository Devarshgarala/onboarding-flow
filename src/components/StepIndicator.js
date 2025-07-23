import React from 'react';

const StepIndicator = ({ currentStep, onStepClick }) => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {steps.map((step) => (
        <div
          key={step}
          onClick={() => onStepClick(step)}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            backgroundColor: currentStep === step ? '#007bff' : '#ccc',
            color: currentStep === step ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          Step {step}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
