// SignUp.jsx
import React, { useState, useContext } from 'react'; // Adding useContext to the import
import { AuthContext } from '../../Context/AuthProvider'; // Importing AuthContext to access signIn function

const SignUp = () => {
  const { signIn } = useContext(AuthContext); // Accessing signIn function from AuthContext
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send formData to your backend to create a new user
    console.log('User Signed Up:', formData);
    signIn(formData.username, formData.password); // Signing in the user after sign-up
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
