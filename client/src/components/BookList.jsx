import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books = [] }) {
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {books.map(book => (
                    <div key={book.id} className="col">
                        <Link to={`/books/${book.id}`} className="text-decoration-none text-dark">
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
                            </div>
                        </Link>

                        <div className="card-footer bg-transparent border-0">
                            <button className="btn btn-dark w-100">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;
