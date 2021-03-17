import React, { Component } from 'react';
import image1 from '../../Assets/images/image_1.jpg';
import image2 from '../../Assets/images/image_2.jpg';
import image4 from '../../Assets/images/image_4.jpg';
class index extends Component {
    render() {
        return (
            <div>
                <section className="ftco-intro py-5 bg-primary">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className="row g-lg-5">
                                    <div className="col-md-7 text-lg-right">
                                        <h2 className="mb-0">Newsletter - Stay tune and get the latest update</h2>
                                        <p>Far far away, behind the word mountains</p>
                                    </div>
                                    <div className="col-md-5 border-left d-flex align-items-center">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex align-items-center">
                                                <input type="text" className="form-control" placeholder="Enter email address"></input>
                                                <a href="#this" className="btn-icon"><span className="fa fa-paper-plane"></span></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="ftco-footer">
                    <div className="container-xl">
                        <div className="row mb-5 justify-content-between">
                            <div className="col-md-6 col-lg">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2 logo d-flex">
                                        <a className="navbar-brand align-items-center" href="index.html">
                                            Academia
                <span>Online Education &amp; Learning</span>
                                        </a>
                                    </h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <ul className="ftco-footer-social list-unstyled mt-2">
                                        <li><a href="#this"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#this"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#this"><span className="fa fa-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Explore</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>About Us</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Services</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Courses</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Blog</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Quick Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Contact Us</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Pricing</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Terms &amp; Conditions</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Privacy</a></li>
                                        <li><a href="#this"><span className="ion ion-ios-arrow-round-forward me-2"></span>Feedbacks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Recent Posts</h2>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img img rounded" href="#this" style={{ backgroundImage: `url(${image1})` }}></a>
                                        <div className="text">
                                            <div className="meta">
                                                <div><a href="#this"><span className="fa fa-calendar"></span> Jan. 18, 2021</a></div>
                                                <div><a href="#this"><span className="fa fa-user"></span> Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#this">Creativity and Inspiration</a></h3>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img img rounded" style={{ backgroundImage: `url(${image2})` }}></a>
                                        <div className="text">
                                            <div className="meta">
                                                <div><a href="#this"><span className="fa fa-calendar"></span> Jan. 18, 2021</a></div>
                                                <div><a href="#this"><span className="fa fa-user"></span> Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#this">Creativity and Inspiration</a></h3>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img img rounded" style={{ backgroundImage: `url(${image4})` }}></a>
                                        <div className="text">
                                            <div className="meta">
                                                <div><a href="#this"><span className="fa fa-calendar"></span> Jan. 18, 2021</a></div>
                                                <div><a href="#this"><span className="fa fa-user"></span> Admin</a></div>
                                            </div>
                                            <h3 className="heading"><a href="#this">Creativity and Inspiration</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li><span className="icon fa fa-map marker"></span><span className="text">203 Fake St. Mountain View, San
                    Francisco, California, USA</span></li>
                                            <li><a href="#this"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                                            <li><a href="#this"><span className="icon fa fa-paper-plane"></span><span className="text"><span
                                                className="__cf_email__"
                                                data-cfemail="442d2a222b043d2b3136202b29252d2a6a272b29">[email&#160;protected]</span></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid px-0 py-5 bg-darken">
                        <div className="container-xl">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p className="mb-0" style={{ fontSize: '14' }}>Copyright &copy;
                                        <script data-cfasync="false"
                                            src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                        {`${new Date().getFullYear()} `}
                                        All rights reserved | This template is made with 
                                        <i className="fa fa-heart color-danger" aria-hidden="true"></i> 
                                        by
                                        <a href="https://www.facebook.com/duck.teeen/" target="_blank1" rel="nofollow noopener"> Dustin</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default index;