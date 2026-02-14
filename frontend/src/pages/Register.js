import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        // This stops the page from refreshing
        e.preventDefault();

        // Lab Simulation: Log data and alert success
        console.log("Registering User:", formData);
        alert("Registration Successful! You can now login.");

        // Redirect to Login page so you can show the flow
        navigate('/login');
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2>Create Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;