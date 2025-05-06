import React, { useState, useEffect } from 'react';

function Home() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/books?sortBy=price&page=1&limit=10')

            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setError(false);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setError(false);
            });
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Bookshelf</h2>
            {error && <p style={{ color: 'red' }}>Failed to load books.</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {books.map(book => (
                    <div key={book.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '1rem',
                        width: '220px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h4>{book.title}</h4>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Price:</strong> £{book.price}</p>
                        <button>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home; 
