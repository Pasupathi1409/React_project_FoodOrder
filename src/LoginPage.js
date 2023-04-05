import React, { useState } from 'react';
import './LoginPage.css'
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };
  
  return (
    <div className="login-page">
      <h2>Food Ordering Website</h2>
      <h3>Login to Your Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <Link to='/FoodOrder'>
          <button className="next1" type="submit">Submit</button>
        </Link>

      </form>
      
    </div>
  );
};

export default LoginPage;
