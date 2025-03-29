import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  console.log('SignUpPage rendered'); // Debugging log
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Sign Up form submitted'); // Debugging log
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
        <h1>Sign Up</h1>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter your username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter your password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" placeholder="Confirm your password" required />
        </label>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sign Up
        </button>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/signin" style={{ color: '#007BFF' }}>
            Already have an account? Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
