import React, { useEffect, useState } from 'react';

function Bookmark() {
    const [bookmarks, setBookmarks] = useState([]);
    const [error, setError] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:5000/api/members/bookmarks', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (!res.ok) throw new Error('Fetch failed');
                return res.json();
            })
            .then(data => setBookmarks(data))
            .catch(err => {
                console.warn('Using mock bookmarks due to error.');
                setError(true);
                setBookmarks([
                    { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 22.5 },
                    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 18.0 },
                    { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 15.99 }
                ]);
            });
    }, []);

    const handleRemove = (id) => {
        // In real API: call DELETE /bookmarks/:id
        setBookmarks(prev => prev.filter(book => book.id !== id));
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">My Bookmarks</h2>

            {error && (
                <div className="alert alert-warning text-center">
                    Showing mock bookmarks (API offline)
                </div>
            )}

            {bookmarks.length === 0 ? (
                <p>No bookmarked books found.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {bookmarks.map(book => (
                        <div key={book.id} className="col">
                            <div className="card h-100 shadow-sm text-center">
                                <div
                                    className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center"
                                    style={{ height: '220px' }}
                                >
                                    <span className="text-muted">Book Cover</span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text text-muted">{book.author}</p>
                                    <p className="fw-bold">£{book.price}</p>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <button className="btn btn-outline-danger w-100" onClick={() => handleRemove(book.id)}>
                                        Remove Bookmark
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Bookmark;
