import React from 'react';

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#f5f5f5',
            padding: '3rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            borderTop: '1px solid #ccc',
        }}>
            <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
                <h4>About Us</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
                <h4>Customer Service</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>

            <div style={{ flex: '1 1 250px', marginBottom: '1rem' }}>
                <h4>Newsletter</h4>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                        padding: '0.5rem',
                        width: '70%',
                        marginRight: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Subscribe</button>
            </div>
        </footer>
    );
}

export default Footer;
