import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <HomePage user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
