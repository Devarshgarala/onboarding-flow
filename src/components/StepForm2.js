import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveStepData, setStep } from '../features/onboardingSlice';

const StepForm2 = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
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
      dispatch(saveStepData({ stepKey: 'step2', data: formData }));
      dispatch(setStep(3)); // Move to next step
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Phone Number:</label><br />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default StepForm2;
