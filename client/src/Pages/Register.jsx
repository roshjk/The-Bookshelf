import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            if (!res.ok) throw new Error('Registration failed');

            const data = await res.json();
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <form onSubmit={handlesubmit} style={{
                width: '400px',
                padding: '2rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Register</h2>

                <input
                    type="text"
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />

                <button type="submit" style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Register</button>

                <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
