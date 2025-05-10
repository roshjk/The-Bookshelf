import React from 'react';

function Hero() {
    return (
        <section className="bg-light text-center p-5 rounded my-4">
            <h1 className="display-6 fw-semibold mb-3">
                Discover your Next Great Road
            </h1>

            <p className="fs-5 mb-4">
                Explore thousands of books from fiction to non-fiction, bestsellers to classics.
            </p>

            <button className="btn btn-dark fw-bold px-4 py-2">
                Browse Collection
            </button>
        </section>
    );
}

export default Hero;
