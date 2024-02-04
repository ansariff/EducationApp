import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [username, setUsername] = useState('');

  const handleLoginClick = () => {
    // Check if the username is provided
    if (username.trim() === '') {
      alert('Please enter a username to login.');
      return;
    }

    // Additional login logic can be added here
    if (onLogin) {
      onLogin(); // Call onLogin if it's provided
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div> */}
        <button onClick={handleLoginClick} className="sign-in-btn">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
