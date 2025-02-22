import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ height : "100vh" ,backgroundColor: '#f8f9fa' }} // Optional background color
        >
            <div
                className="container mt-5 shadow-lg p-4"
                style={{width: '25rem', borderRadius: '8px', backgroundColor: 'white' }}
            >
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: 'Orange', color: 'white' }}
                    >
                        Login
                    </button>
                </form>
                <div className="mt-3">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
export default Login;