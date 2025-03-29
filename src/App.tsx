console.log('App.tsx is being loaded'); // Debugging log

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoListPage from './pages/TodoListPage';

console.log('App.tsx loaded'); // Debugging log

const App: React.FC = () => {
  console.log('App rendered'); // Debugging log
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todolist" element={<TodoListPage />} />
        <Route path="*" element={<Navigate to="/signin" replace />} /> {/* Redirect to Sign In */}
      </Routes>
    </Router>
  );
};

export default App;
