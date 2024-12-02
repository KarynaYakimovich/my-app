import React, { useState } from 'react';

const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 3) return "Name must be at least 3 characters";
  return null;
};

const NameForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
    setError(validateName(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateName(name);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
      {submitted && !error && (
        <p style={{ color: 'green' }}>Form submitted successfully!</p>
      )}
    </div>
  );
};

export default NameForm;