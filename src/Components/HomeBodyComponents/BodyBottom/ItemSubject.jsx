import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemSubject extends Component {
  componentDidMount() {
  }
  
  render() {
    const { imgSubject, nameSubject, idSubject } = this.props;
    return (
      <div
        className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Link to={`/subject/${idSubject}/class`} className="services-2">
          <div className="icon">
            <i className={`${imgSubject}`}></i>
          </div>
          <div className="text d-flex flex-column-reverse justify-content-between align-items-center">
            <h2>{`${nameSubject}`}</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default ItemSubject;
