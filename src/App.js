// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import SmallestNumberGame from './components/Task1';
import MatchTheColumnGame from './components/Task2';
import FillInBlanksGame from './components/Task3';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For now, let's simulate a successful login
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
        <Route path="/task1" element={<SmallestNumberGame />} />
        <Route path="/task2" element={<MatchTheColumnGame />} />
        <Route path="/task3" element={<FillInBlanksGame />} />
      </Routes>
    </Router>
  );
};

export default App;
