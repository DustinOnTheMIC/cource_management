import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo-header.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" className="img-logo" /> 
              </Link>
            </div>
            <div className="open-nav-menu">
              {/* <i class="fa fa-2x fa-arrow-left" ></i> */}
            </div>
            <div className="menu-overlay"></div>
            <nav className="nav-menu">
              <div className="close-nav-menu">
                {/* <img src="./images/close.png" alt="close" /> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
