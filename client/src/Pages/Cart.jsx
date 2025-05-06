import React, { useEffect, useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:5000/api/members/cart', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setCart(data))
            .catch(err => {
                console.error('Error loading cart:', err);
                setError(true);
            });
    }, []);

    const handleRemove = async (itemId) => {
        try {
            const res = await fetch(`http://localhost:5000/api/members/cart/${itemId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!res.ok) throw new Error('Failed to remove item');

            setCart(cart.filter(item => item.id !== itemId));
        } catch (err) {
            alert('Error removing item');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Your Cart</h2>
            {error && <p style={{ color: 'red' }}>Failed to load cart.</p>}

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cart.map(item => (
                        <div key={item.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}>
                            <div>
                                <h4>{item.title}</h4>
                                <p>Author: {item.author}</p>
                                <p>Price: £{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button style={{
                        marginTop: '2rem',
                        padding: '1rem',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        alignSelf: 'flex-end'
                    }}>
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
