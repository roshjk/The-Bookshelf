import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import BookList from '../components/BookList';
import Footer from '../components/Footer';

function Home() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/books?sortBy=price&page=1&limit=10')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setError(false);
            })
            .catch(err => {
                console.error('Error fetching books:', err);
                setError(true);
            });
    }, []);

    return (
        <div>
            <Hero />
            <FilterBar />
            <div style={{ padding: '2rem' }}>
                <h2>Bookshelf</h2>
                {error && <p style={{ color: 'red' }}>Failed to load books.</p>}
                <BookList books={books} />

               
            </div>
            <Footer />
        </div>
    );
}

export default Home;
