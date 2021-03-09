import React, {Component} from 'react';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }
    }
    render() {
        const {isLogin} = this.state

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
                            <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="courses.html">All Courses</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
                            <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="blog.html">Journal</a></li>

                            {/* đ biết vì sao nó false mà lại render ra cái này :) */}
                            {isLogin ? '' : <li class="nav-item"><a class="nav-link" href="contact.html">Login</a></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Index;