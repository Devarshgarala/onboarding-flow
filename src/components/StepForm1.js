import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveStepData, setStep } from '../features/onboardingSlice';

const StepForm1 = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(saveStepData({ stepKey: 'step1', data: formData }));
      dispatch(setStep(2)); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>First Name:</label><br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <div style={{ color: 'red' }}>{errors.firstName}</div>
        )}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Last Name:</label><br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && (
          <div style={{ color: 'red' }}>{errors.lastName}</div>
        )}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default StepForm1;
