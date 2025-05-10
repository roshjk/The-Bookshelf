import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyOrder() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:5000/api/orders', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => setOrders(data))
            .catch(err => {
                console.warn('API not available, using mock orders.');
                setError(true);
                setOrders([
                    { id: 1, title: 'The Great Gatsby', quantity: 1, price: 14.99, status: 'Processing' },
                    { id: 2, title: '1984', quantity: 2, price: 25.98, status: 'Shipped' },
                    { id: 3, title: 'To Kill a Mockingbird', quantity: 1, price: 16.99, status: 'Processing' }
                ]);
            });
    }, []);

    const handleCancel = (orderId) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId ? { ...order, status: 'Cancelled' } : order
            )
        );
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">My Orders</h2>
                <button className="btn btn-outline-primary" onClick={() => navigate('/')}>← Back to Home</button>
            </div>

            {error && (
                <div className="alert alert-warning text-center mb-4">
                    Showing mock orders (API offline)
                </div>
            )}

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {orders.map(order => (
                        <div key={order.id} className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center">
                            <div>
                                <h5>{order.title}</h5>
                                <p className="mb-1">Quantity: {order.quantity}</p>
                                <p className="mb-1">Total: £{(order.price * order.quantity).toFixed(2)}</p>
                                <span className={`badge ${order.status === 'Cancelled' ? 'bg-danger' :
                                        order.status === 'Shipped' ? 'bg-success' : 'bg-warning text-dark'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                            {order.status !== 'Cancelled' && (
                                <button className="btn btn-outline-danger" onClick={() => handleCancel(order.id)}>
                                    Cancel Order
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyOrder;
