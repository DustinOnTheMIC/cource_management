import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg2 from "../../../Assets/images/bg_2.jpg";

class Introduce extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-7 pt-5 mt-5 text-center">
              <p className="breadcrumbs">
                <span className="me-2">
                  <Link to="/">
                    Home
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>
                <span>
                  {this.props.pageTitle} <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">{this.props.pageTitle}</h1>
              <p className="text-description-subject">
                {this.props.textDescriptionSubject}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Introduce;
