import React from 'react';

function Hero() {
    return (
        <section style={{
            background: '#f5f5f5',
            padding: '4rem 2rem',
            textAlign: 'center',
            borderRadius: '8px',
            margin: '2rem 0',
        }}>

            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                Discover your Next Great Road
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Explore thousands of books from fiction to non-fiction, bestsellers to classics.
            </p>

            <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight:'bold'
            }}>
                Browse Collection

            </button>

        </section>
    );
}
export default Hero;