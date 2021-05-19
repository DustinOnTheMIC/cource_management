import React, { Component } from "react";
import { Link } from "react-router-dom";
import image1 from "../../Assets/images/image_1.jpg";
import image2 from "../../Assets/images/image_2.jpg";
import image4 from "../../Assets/images/image_4.jpg";
class index extends Component {
  render() {
    return (
      <div id="footer">
        <section className="ftco-intro py-5 bg-primary">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
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
                    <Link to="/" className="navbar-brand align-items-center">
                      Academia
                      <span>Online Education &amp; Learning</span>
                    </Link>
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <ul className="ftco-footer-social list-unstyled mt-2">
                    <li>
                      <a href="http://www.twitter.com/" target="_blank">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.fb.com/" target="_blank">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.instagram.com/" target="_blank">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.googleplus.com/" target="_blank">
                        <span className="fab fa-google-plus-g"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Explore</h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/all_class">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/teacher">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Teacher
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/all_class">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/teacher">
                        <span className="ion ion-ios-arrow-round-forward me-2"></span>
                        Teacher
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Recent Posts</h2>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img img rounded"
                      href="#this"
                      style={{ backgroundImage: `url(${image1})` }}
                    ></a>
                    <div className="text">
                      <div className="meta">
                        <div>
                          <a href="#this">
                            <span className="fa fa-calendar"></span> Jan. 18,
                            2021
                          </a>
                        </div>
                        <div>
                          <a href="#this">
                            <span className="fa fa-user"></span> Admin
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#this">Creativity and Inspiration</a>
                      </h3>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img img rounded"
                      style={{ backgroundImage: `url(${image2})` }}
                    ></a>
                    <div className="text">
                      <div className="meta">
                        <div>
                          <a href="#this">
                            <span className="fa fa-calendar"></span> Jan. 18,
                            2021
                          </a>
                        </div>
                        <div>
                          <a href="#this">
                            <span className="fa fa-user"></span> Admin
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#this">Creativity and Inspiration</a>
                      </h3>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img img rounded"
                      style={{ backgroundImage: `url(${image4})` }}
                    ></a>
                    <div className="text">
                      <div className="meta">
                        <div>
                          <a href="#this">
                            <span className="fa fa-calendar"></span> Jan. 18,
                            2021
                          </a>
                        </div>
                        <div>
                          <a href="#this">
                            <span className="fa fa-user"></span> Admin
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#this">Creativity and Inspiration</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li>
                        <span className="icon fa fa-map marker"></span>
                        <span className="text">
                          254 Nguyen Van Linh - Da Nang
                        </span>
                      </li>
                      <li>
                        <a href="#this">
                          <span className="icon fa fa-phone"></span>
                          <span className="text">+2 36 123456</span>
                        </a>
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
                  <p className="mb-0" style={{ fontSize: "14" }}>
                    Copyright &copy; 2021
                    Design by
                    <a
                      href="#"
                      rel="nofollow noopener"
                    >
                      Academia
                    </a>
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
