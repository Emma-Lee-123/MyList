import React from 'react';

const LoginPage: React.FC = () => {
  console.log('LoginPage rendered'); // Debugging log

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted'); // Debugging log
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
        <h1>Login Page</h1>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter your username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter your password" required />
        </label>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
