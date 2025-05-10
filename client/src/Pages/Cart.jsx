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

                // Mock fallback data
                setCart([
                    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 14.99, quantity: 1 },
                    { id: 2, title: "1984", author: "George Orwell", price: 25.98, quantity: 2 },
                    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 16.99, quantity: 1 }
                ]);
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

    const handleQuantityChange = (itemId, newQty) => {
        const updatedCart = cart.map(item =>
            item.id === itemId ? { ...item, quantity: newQty } : item
        );
        setCart(updatedCart);
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? 4.99 : 0;
    const discount = cart.length > 0 ? 5.00 : 0;
    const total = (subtotal + shipping - discount).toFixed(2);

    return (
        <div className="container py-5">
            <h2 className="mb-4">Shopping Cart ({cart.length} items)</h2>

            {error && (
                <div className="alert alert-danger" role="alert">
                    Failed to load cart. Showing sample data.
                </div>
            )}

            <div className="row">
                {/* Left: Cart Items */}
                <div className="col-lg-8">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            {cart.map(item => (
                                <div key={item.id} className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex align-items-start gap-3">
                                        <div
                                            className="bg-light d-flex justify-content-center align-items-center"
                                            style={{ width: '80px', height: '100px' }}
                                        >
                                            <span className="text-muted">Book Cover</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="text-muted mb-1">{item.author}</p>
                                            <p className="mb-2">£{item.price}</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <label className="form-label mb-0 me-2">Qty:</label>
                                                <select
                                                    className="form-select form-select-sm"
                                                    style={{ width: '80px' }}
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                >
                                                    {[...Array(10)].map((_, i) => (
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    ))}
                                                </select>
                                                <button className="btn btn-link text-danger p-0" onClick={() => handleRemove(item.id)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Order Summary */}
                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="card p-4 shadow-sm">
                        <h5 className="mb-3">Order Summary</h5>
                        <ul className="list-unstyled mb-3">
                            <li className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <strong>£{subtotal.toFixed(2)}</strong>
                            </li>
                            <li className="d-flex justify-content-between">
                                <span>Shipping</span>
                                <strong>£{shipping.toFixed(2)}</strong>
                            </li>
                            <li className="d-flex justify-content-between">
                                <span>Discount</span>
                                <strong>-£{discount.toFixed(2)}</strong>
                            </li>
                            <li className="d-flex justify-content-between border-top pt-2 mt-2">
                                <span>Total</span>
                                <strong>£{total}</strong>
                            </li>
                        </ul>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button className="btn btn-outline-secondary" type="button">Apply</button>
                        </div>

                        <button className="btn btn-dark w-100">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
