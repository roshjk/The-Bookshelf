import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#343a40', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container-fluid d-flex justify-content-between align-items-center px-4 py-2">
                
                <Link to="/" className="navbar-brand text-white fw-bold">
                    Book Store
                </Link>

               
                <div className="d-flex gap-4">
                    <Link to="/" className="nav-link text-white">Home</Link>
                    <Link to="/categories" className="nav-link text-white">Categories</Link>
                    <Link to="/new" className="nav-link text-white">New Arrival</Link>
                    <Link to="/bestsellers" className="nav-link text-white">Best Sellers</Link>
                </div>

              
                <div className="d-flex align-items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search for books and more"
                        className="form-control"
                        style={{ width: '200px' }}
                    />
                    <Link to="/cart" className="text-white" title="Cart">
                        <FaShoppingCart size={20} />
                    </Link>
                    <Link to="/login" className="text-white" title="User Profile">
                        <FaUser size={20} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;