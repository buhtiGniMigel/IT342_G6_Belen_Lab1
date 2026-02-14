import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Clear the session
        navigate('/login');
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2>Welcome, User!</h2>
                <p>You have successfully logged in to your account.</p>
                <button onClick={handleLogout} style={{backgroundColor: '#ef4444'}}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;