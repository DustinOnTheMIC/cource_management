import React, { Component } from "react";
import "../UserProfileComponents/UserProfile/UserProfileCss.css";

class InforTea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  render() {
    return (
      <div className="mb-5">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{
            backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")`,
          }}
        ></div>
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>John Doe</h4>
                        <p className="text-secondary mb-1">Full Stack Developer</p>
                        <p className="text-muted font-size-sm">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card mt-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Kenneth Valdez
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          (320) 380-4539
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Bay Area, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InforTea;
