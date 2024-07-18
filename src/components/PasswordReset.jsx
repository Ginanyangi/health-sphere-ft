import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset= () =>{
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/password-reset/', {
        email,
      });
      console.log('Password reset email sent:', response.data);
    } catch (error) {
      console.error('Error sending password reset email:', error.response.data);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Reset Link</button>
      </form>
    </div>
  );
};

export default PasswordReset;
