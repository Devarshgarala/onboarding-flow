// src/components/StepForm5.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../features/onboardingSlice';

const skillsOptions = ['React', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'AWS'];

const StepForm5 = () => {
  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [error, setError] = useState('');
  const allData = useSelector((state) => state.onboarding.formData);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSkills.length === 0) {
      setError('Please select at least one skill');
      return;
    }

    dispatch(saveStepData({ stepKey: 'step5', data: { skills: selectedSkills } }));
    setError('');
    alert('🎉 Onboarding Completed!\n\n' + JSON.stringify({ ...allData, step5: { skills: selectedSkills } }, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Your Skills:</label>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          {skillsOptions.map((skill) => (
            <label key={skill} style={{ display: 'inline-block', marginRight: '10px' }}>
              <input
                type="checkbox"
                value={skill}
                checked={selectedSkills.includes(skill)}
                onChange={() => toggleSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>

      <button type="submit">Finish</button>
    </form>
  );
};

export default StepForm5;
