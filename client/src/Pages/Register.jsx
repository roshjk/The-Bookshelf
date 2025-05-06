import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div style={{ padding: '2rem' }}>
            <h2>Register Here</h2>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
