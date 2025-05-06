import React from 'react';

function FilterBar({ onGenreChange, onSortChange }) {
    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }}>
            <select onChange={(e) => onGenreChange(e.target.value)} style={selectStyle}>
                <option value="">All Genres</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="mystery">Mystery</option>
                <option value="Sci-Fi">Sci-Fi</option>
            </select>

            <select onChange={(e) => onSortChange(e.target.value)} style={selectStyle}>
                <option value="">Sort by</option>
                <option value="price">Price</option>
                <option value="author">Author</option>
                <option value="title">Title</option>
            </select>

            <button style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#f5f5f5',
                color: '#333',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
            }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            >
                More Filters
            </button>
        </div>
    );
}

const selectStyle = {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#333'
};

export default FilterBar;
