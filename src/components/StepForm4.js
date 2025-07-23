// src/components/StepForm4.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveStepData, setStep } from '../features/onboardingSlice';

const StepForm4 = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    qualification: '',
    graduationYear: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
    }

    const currentYear = new Date().getFullYear();
    const year = parseInt(formData.graduationYear);

    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = 'Graduation year is required';
    } else if (isNaN(year) || year < 1950 || year > currentYear) {
      newErrors.graduationYear = `Year must be between 1950 and ${currentYear}`;
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
      dispatch(saveStepData({ stepKey: 'step4', data: formData }));
      dispatch(setStep(5));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Highest Qualification:</label><br />
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
        {errors.qualification && (
          <div style={{ color: 'red' }}>{errors.qualification}</div>
        )}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Graduation Year:</label><br />
        <input
          type="text"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
        />
        {errors.graduationYear && (
          <div style={{ color: 'red' }}>{errors.graduationYear}</div>
        )}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default StepForm4;
