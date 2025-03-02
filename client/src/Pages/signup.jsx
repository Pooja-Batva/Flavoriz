import React, { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        if (password === confirmPassword) {
            console.log('Signing up with:', { username, email, password });
        } else {
            console.log('Passwords do not match');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ backgroundColor: '#f8f9fa' }} // Optional background color
        >
            <div
                className="container mt-5 shadow-lg p-4"
                style={{ width: '25rem', borderRadius: '8px', backgroundColor: 'white' }}
            >
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: 'Orange', color: 'white' }}
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-3">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
