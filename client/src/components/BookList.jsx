import React from 'react';

function BookList({ books = [] }) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '2rem'
        }}>
            {books.map(book => (
                <div key={book.id} style={{
                    width: '200px',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    padding: '1rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{
                        height: '220px',
                        backgroundColor: '#ddd',
                        marginBottom: '1rem'
                    }}>
                        <p style={{ marginTop: '90px' }}>Book Cover</p>
                    </div>
                    <h4>{book.title}</h4>
                    <p style={{ margin: '0.5rem 0' }}>{book.author}</p>
                    <p><strong>£{book.price}</strong></p>
                    <button style={{
                        marginTop: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BookList;
