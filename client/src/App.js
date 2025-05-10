import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookDetails from './Pages/BookDetails';
import MyOrder from './Pages/MyOrder';
import Bookmark from './Pages/Bookmark';



function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />


                {/*Book Details Routings */}

                <Route path="/books/:id" element={<BookDetails />} />

                {/*Routing of order pages */}

                <Route path="/orders" element={<MyOrder />} />

                {/*Routing of BookMark Page */}

                <Route path="/bookmarks" element={<Bookmark /> } />




            </Routes>
        </Router>
    );
}

export default App;
