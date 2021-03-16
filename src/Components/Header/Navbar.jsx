import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg  ftco-navbar-light">
                <div className="container-xl">
                    <a href="#this" className="btn-custom order-lg-last">Get Start</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all_class" className="nav-link">
                                    All Class
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className="nav-link">
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link">
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                            {/* đ biết vì sao nó false mà lại render ra cái này :) */}
                            {/* {isLogin ? '' : <li className="nav-item"><a className="nav-link" href="contact.html">Login</a></li>} */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;