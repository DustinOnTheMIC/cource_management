import React, { Component } from "react";
import author1 from "../../../Assets/images/author-1.jpg";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

class index extends Component {
  handleSubscribe = (e) => {
    swal({
      text: `Do you want to subscribe to this class?`,
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        swal(`Done! You `, {
          icon: "success",
        });
      }
    });
  };

  render() {
    const { name, rate, teacherName, teacherPic, cost, link } = this.props;
    //để vậy sau này add vào sau

    return (
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">
        <div className="courses">
          <div className="d-flex">
            <div className="icon">
              <span className="flaticon-engineer"></span>
            </div>
            <div className="text">
              <h2>Basic Fundamentals for Software Engineering</h2>
              <p className="rate">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span>(5.0)</span>
              </p>
              <div className="author-wrap d-flex align-items-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${author1})` }}
                ></div>
                <span className="author">by John Smith</span>
              </div>
              <p className="lec">
                <a href="#this">50 lectures (190 hrs)</a>
              </p>
            </div>
          </div>
          <div className="text-center bg-light rounded py-2 my-3">
            <p className="course-price mb-0">
              <span>$100 All Course</span> / <span>$15 per month</span>
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={(e) => this.handleSubscribe(e)}
              className="btn d-block btn-primary btn-outline-primary py-3 col-12"
            >
              Enroll Now!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
