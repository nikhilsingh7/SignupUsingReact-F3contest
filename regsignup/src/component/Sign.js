import React, { useState } from 'react';

function Sign() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = [];
    if (email === '') {
      newErrors.push('Email is required');
    }
    if (name === '') {
      newErrors.push('Name is required');
    }
    if (password === '') {
      newErrors.push('Password is required');
    }
    if (confirmPassword === '') {
      newErrors.push('Confirm Password is required');
    }
    if (password !== confirmPassword) {
      newErrors.push('Passwords do not match');
    }

    // Update errors state
    setErrors(newErrors);

    // Submit form if no errors
    if (newErrors.length === 0) {
      console.log('Form submitted successfully!');
      // Add code to submit form data here
    }
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
      
      <div>
        
        <input placeholder='Email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        
        <input placeholder='Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        
        <input placeholder='Password'  type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        
        <input placeholder='ConfirmPassword' type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      {errors.length > 0 && (
        <div className="errors">
          <h5>Please fix the following errors:</h5>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="submit">Sign up</button>
    </form>
    </>
  );
}

export default Sign();