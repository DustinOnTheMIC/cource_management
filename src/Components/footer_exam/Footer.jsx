import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="social-network">
              <h4>Copyright by Academia 2021</h4>
              <div className="icon">
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fa fa-facebook"
                > </a>
              </div>
              <div className="icon">
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fa fa-twitter"
                > </a>
              </div>
              <div className="icon">
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fa fa-instagram"
                > </a>
              </div>
            </div>
            <div className="support">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#this">Introduce</a>
                </li>
                <li>
                  <a href="#this">Rules</a>
                </li>
                <li>
                  <a href="#this">Policy</a>
                </li>
              </ul>
            </div>
            <div className="contact-me">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <i className="fas fa-globe-asia item-footer"></i>
                  <span className="item-footer"> Website:</span> course-system-12cce.web.app/
                </li>
                <li>
                  <i className="fas fa-map-marked item-footer"></i>
                  <span className="item-footer"> Address:</span> 245 Nguyễn Văn
                  Linh, Hải Châu, Đà Nẵng
                </li>
                <li>
                  <i className="fas fa-envelope-open-text item-footer"></i>
                  <span className="item-footer"> Email:</span> Email:
                  academia@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
