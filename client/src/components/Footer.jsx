import React from 'react';

function Footer() {
    return (
        <footer className="bg-light border-top py-5 mt-5">
            <div className="container">
                <div className="row gy-4">
                    {/* About Us */}
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-dark">Our Story</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Blog</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Careers</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-md-4">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Shipping</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Returns</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-4">
                        <h5>Newsletter</h5>
                        <form className="d-flex flex-wrap gap-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                style={{ maxWidth: '300px' }}
                            />
                            <button className="btn btn-dark" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
