import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            {/* Logo */}
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                    Book Store
                </Link>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
                <Link to="/categories" style={{ textDecoration: 'none', color: '#333' }}>Categories</Link>
                <Link to="/new" style={{ textDecoration: 'none', color: '#333' }}>New Arrival</Link>
                <Link to="/bestsellers" style={{ textDecoration: 'none', color: '#333' }}>Best Sellers</Link>
            </div>

            {/* Search + Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search for books and more"
                    style={{
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '200px'
                    }}
                />

                <Link to="/cart" style={{ color: '#000', textDecoration: 'none' }} title="Cart">
                    <FaShoppingCart size={20} />
                </Link>
                <Link to="/login" style={{ color: '#000', textDecoration: 'none' }} title="User Profile">
                    <FaUser size={20} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
