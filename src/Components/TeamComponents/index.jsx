import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../../env";
class index extends Component {
  render() {
    const { name, position, img, id_teacher } = this.props;
    return (
      <div
        className="col-md-6 col-lg-3 class-shadow my-3 mx-3 rounded"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        style={{padding:"0", margin: "0 !important"}}
      >
        <div className="staff">
          <div
            className="img"
            style={{ backgroundImage: `url(${API.API_CURRENT}/${img})` }}
          >
            <ul className="ftco-social">
              <li>
                <a href="https://twitter.com/?lang=en">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <span className="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/intl/vi/account/about/">
                  <span className="fab fa-google-plus-g"></span>
                </a>
              </li>
            </ul>
          </div>
          <Link to={`/teacher/${id_teacher}/profile`}>
            <div className="text">
              <h3>{name}</h3>
              <span className="position">{position}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default index;
