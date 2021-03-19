import React, { Component } from "react";

class InforAddress extends Component {
  render() {
    return (
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="dbox w-100 d-flex align-items-start">
            <div className="text">
              <p>
                <span>Address:</span>
                254 Nguyễn Văn Linh
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dbox w-100 d-flex align-items-start">
            <div className="text">
              <p>
                <span>Email:</span>{" "}
                <a href="cdn-cgi/l/email-protection#3950575f567940564c4b4a504d5c175a5654">
                  <span className="__cf_email__">
                    <a href="mailto:someone@example.com">
                      Example@gmail.com
                    </a>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dbox w-100 d-flex align-items-start">
            <div className="text">
              <p>
                <span>Phone:</span>{" "}
                <a href="tel:0986 807 109">0986 123 456</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InforAddress;
