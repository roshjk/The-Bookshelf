import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/api/books/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Fetch failed');
                return res.json();
            })
            .then((data) => setBook(data))
            .catch((err) => {
                console.warn('API not available. Using mock data.', err);
                setError(true);

                // Fallback mock data
                const mockBook = {
                    id,
                    title: `Book #${id}`,
                    author: `Author ${id}`,
                    price: (9.99 + parseInt(id)).toFixed(2),
                    description: "This is a mock book description. The real API is currently unavailable.",
                    image: ''
                };
                setBook(mockBook);
            });
    }, [id]);

    if (!book) return <div className="text-center mt-5">Loading book info...</div>;

    return (
        <div className="container my-5">
            {error && (
                <div className="alert alert-warning text-center mb-4">
                    
                </div>
            )}

            <div className="row g-4">
                <div className="col-md-4 text-center">
                    <img
                        src={book.image || 'https://via.placeholder.com/300x400?text=No+Cover'}
                        alt={book.title}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-3">{book.title}</h2>
                    <h5 className="text-muted mb-2">by {book.author}</h5>
                    <h4 className="text-success mb-3">₹ {book.price}</h4>
                    <p className="mb-4">{book.description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-dark">Add to Cart</button>
                        <button className="btn btn-outline-secondary">Bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
