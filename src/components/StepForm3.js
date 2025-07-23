import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveStepData, setStep } from '../features/onboardingSlice';

const StepForm3 = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.street.trim()) newErrors.street = 'Street is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zip.trim()) {
      newErrors.zip = 'Zip code is required';
    } else if (!/^\d{5,6}$/.test(formData.zip)) {
      newErrors.zip = 'Zip must be 5 or 6 digits';
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
      dispatch(saveStepData({ stepKey: 'step3', data: formData }));
      dispatch(setStep(4));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Street:</label><br />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {errors.street && <div style={{ color: 'red' }}>{errors.street}</div>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>City:</label><br />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Zip Code:</label><br />
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default StepForm3;
