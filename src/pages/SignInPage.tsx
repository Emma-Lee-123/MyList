import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
  console.log('SignInPage rendered'); // Debugging log
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Sign In form submitted'); // Debugging log
    navigate('/todolist'); // Navigate to TodoListPage
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1>Sign In</h1>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter your username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter your password" required />
        </label>
        <label>
          <input type="checkbox" name="rememberMe" />
          Remember Me
        </label>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sign In
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Link to="/forgot-password" style={{ color: '#007BFF' }}>
            Forgot Password?
          </Link>
          <Link to="/signup" style={{ color: '#007BFF' }}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
