import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (isRegister && !name.trim()) {
      setError('Please enter your name.');
      return;
    }

    // Simulate login/register success
    const userData = {
      name: isRegister ? name : email.split('@')[0],
      email,
    };
    onLogin(userData);
  };

  return (
    <div className="login-page">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
      </div>

      <div className="login-box">
        <h1>{isRegister ? 'Create account' : 'Sign in'}</h1>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label>Your name</label>
              <input
                type="text"
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={isRegister ? 'At least 6 characters' : 'Enter your password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="show-hide"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {isRegister && (
              <p className="password-hint">
                <i className="fa-solid fa-circle-info"></i> Passwords must be at least 6 characters.
              </p>
            )}
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="login-btn">
            {isRegister ? 'Create your Amazon account' : 'Continue'}
          </button>
        </form>

        {!isRegister && (
          <p className="terms">
            By continuing, you agree to Amazon's{' '}
            <a href="#">Conditions of Use</a> and{' '}
            <a href="#">Privacy Notice</a>.
          </p>
        )}

        <div className="divider">
          <span>New to Amazon?</span>
        </div>

        <button
          className="create-account-btn"
          onClick={() => {
            setIsRegister(!isRegister);
            setError('');
          }}
        >
          {isRegister ? 'Sign in instead' : 'Create your Amazon account'}
        </button>
      </div>

      <div className="login-footer">
        <div className="footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default LoginPage;
