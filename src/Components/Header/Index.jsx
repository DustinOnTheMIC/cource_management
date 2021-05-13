import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class index extends Component {
  render() {
    return (
      <div id="header">
        <div className="top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md col-xl-5 d-flex align-items-center">
                <Link className="navbar-brand align-items-center" to={'/'}>
                  Academia
                  <span>Online Education &amp; Learning</span>
                </Link>
              </div>
              <div className="col-md d-flex align-items-center">
                <div className="con d-flex">
                  <div className="icon">
                    <span className="flaticon-clock"></span>
                  </div>
                  <div className="text">
                    <span>Monday - Friday</span>
                    <strong>8:00AM-8:00PM</strong>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex align-items-center">
                <div className="con d-flex">
                  <div className="icon">
                    <span className="flaticon-telephone"></span>
                  </div>
                  <div className="text">
                    <span>Call Us</span>
                    <strong>+2 392 3929 210</strong>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-end align-items-center">
                <div className="social-media">
                  <p className="mb-0 d-flex">
                    <a
                      href="http://www.fb.com/"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook">
                        <i className="sr-only">Facebook</i>
                      </span>
                    </a>
                    <a
                      href="http://www.twitter.com/"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter">
                        <i className="sr-only">Twitter</i>
                      </span>
                    </a>
                    <a
                      href="http://www.instagram.com/"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram">
                        <i className="sr-only">Instagram</i>
                      </span>
                    </a>
                    <a
                      href="http://www.googleplus.com/"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google-plus">
                        <i className="sr-only">Google plus</i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default index;
