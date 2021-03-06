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
                <Link className="navbar-brand align-items-center" to='/'>
                  Academia
                  <span>Best Courses &amp; Online Testing</span>
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
                      rel="noreferrer"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fab fa-facebook">
                      </span>
                    </a>
                    <a
                      href="http://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fab fa-twitter">
                      </span>
                    </a>
                    <a
                      href="http://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fab fa-instagram">
                      </span>
                    </a>
                    <a
                      href="http://www.googleplus.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fab fa-google-plus-g">
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
