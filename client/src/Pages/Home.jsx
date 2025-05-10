import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import BookList from '../components/BookList';
import Footer from '../components/Footer';

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/books?sortBy=price&page=1&limit=10')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setBooks(data);
                setError(false);
            })
            .catch(err => {
                console.error('Error fetching books:', err);
                setError(true);
                
                setBooks([
                    { id: 1, title: 'Harry Potter and secret of chambers', author: 'JK Rowlings', price: 18.99 },
                    { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 22.50 },
                    { id: 3, title: 'The Kite Runner', author: 'Khaled Hosseini', price: 16.75 },
                    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 14.99 }
                ]);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <Hero />
            <FilterBar />
            <div style={{ padding: '2rem' }}>
                <h2 className="mb-4">Bookshelf</h2>
                {loading && <p>Loading books...</p>}
                {error && <p style={{ color: 'red' }}></p>}
                <BookList books={books} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
