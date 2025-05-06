import React, { useEffect, useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(false);

    const token = localStorage.getItem('token'); //JWT Stored

    useEffect(() => {
        fetch('http://localhost:5000/api/members/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch cart');
                return response.json();
            })
            .then(data => setCart(data))
            .catch(error => {
                console.error('Error fetching cart:', error);
                setError(true);
            });
    }, []); 

    const handleRemove = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/members/cart/${bookId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to remove book');
            setCart(cart.filter(book => book.id !== bookId));
        } catch (error) {
            console.error('Error removing book from cart:', error);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Your Carts</h2>
        </div>
    );
}

export default Cart;
