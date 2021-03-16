import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg  ftco-navbar-light">
                <div class="container-xl">
                    <a href="#this" class="btn-custom order-lg-last">Get Start</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span> Menu
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/all_class" class="nav-link">
                                    All Class
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/team" class="nav-link">
                                    Team
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/pricing" class="nav-link">
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blogs" class="nav-link">
                                    Blogs
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">
                                    Contact
                                </Link>
                            </li>
                            {/* đ biết vì sao nó false mà lại render ra cái này :) */}
                            {/* {isLogin ? '' : <li class="nav-item"><a class="nav-link" href="contact.html">Login</a></li>} */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;