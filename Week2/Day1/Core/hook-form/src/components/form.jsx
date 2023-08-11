import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    Confirmassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ConfirmPassword">ConfirmPassword</label>
          <input
            type="Password"
            value={formData.ConfirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="Your form Data">
        <h2>Your form Data</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.Password}</p>
        <p>ConfirmPassword: {formData.ConfirmPassword}</p>
      </div>
    </div>
  );
}

export default Form;
