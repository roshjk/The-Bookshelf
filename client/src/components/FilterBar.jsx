import React from 'react';

function FilterBar({ onGenreChange, onSortChange }) {
    return (
        <div className="d-flex flex-wrap align-items-center gap-3 p-3 border-bottom bg-white">
           
            <select
                className="form-select w-auto"
                onChange={(e) => onGenreChange(e.target.value)}
            >
                <option value="">All Genres</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="mystery">Mystery</option>
                <option value="Sci-Fi">Sci-Fi</option>
            </select>

            
            <select
                className="form-select w-auto"
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="">Sort by</option>
                <option value="price">Price</option>
                <option value="author">Author</option>
                <option value="title">Title</option>
            </select>

            
            <button className="btn btn-outline-secondary fw-medium">
                More Filters
            </button>
        </div>
    );
}

export default FilterBar;
