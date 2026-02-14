import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
    // Track state using 'name' attributes
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // 1. Set the session item for the Protected Route in App.js
        localStorage.setItem('isLoggedIn', 'true');

        // 2. Optional: Log for debugging
        console.log("Authenticated:", credentials.email);

        // 3. Redirect to dashboard
        navigate('/dashboard');
    };

    return (
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
                <input
                    name="email" // Added name attribute
                    type="email"
                    placeholder="Email Address"
                    required
                    value={credentials.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <input
                    name="password" // Added name attribute
                    type="password"
                    placeholder="Password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    );
};

export default Login;