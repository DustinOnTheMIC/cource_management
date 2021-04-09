import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import * as API from "../../../env";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
    };
  }
  handleSubscribe = (e) => {
    e.preventDefault();
    this.setState({ isLog: null });

    if (localStorage.getItem("token")) {
      swal({
        text: `Do you want to subscribe to this class?`,
        buttons: true,
        dangerMode: true,
      }).then((value) => {
        if (value) {
          if (localStorage.getItem("token")) {
            //trường hợp đã đăng nhập => có token
            console.log("called");
            // let authorization = "bearer " + localStorage.getItem('token') //token đây
            let id_class = 1;
            let price = 2000; //this.props.id khi map xong lấy price bỏ vô đây
            let data = {
              price: price,
              id_class: id_class,
            };

            axios
              .post(
                "https://quanlikhoahoc.herokuapp.com/api/v1/newRegister",
                data,
                {
                  headers: {
                    Authorization: API.API_AUTHENTICATION,
                  },
                }
              )
              .then((res) => {
                swal(`Done! You just subscribe this class`, {
                  icon: "success",
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (localStorage.getItem("isLog") === "fakeLog") {
            //trường hợp đăng nhập tạm (chưa có mật khẩu)
            let name = localStorage.getItem("name");
            let email = localStorage.getItem("email");
            let phone = localStorage.getItem("phone");
            let { id_class } = this.props;
            let price = 2000; //this.props.id khi map xong lấy price bỏ vô đây

            let data = {
              name: name,
              email: email,
              phone: phone,
              price: price,
              id_class: id_class,
            };
            axios
              .post(
                "https://quanlikhoahoc.herokuapp.com/api/v1/auth/register",
                data
              )
              .then((res) => {
                swal(`Done! You just subscribe this class`, {
                  icon: "success",
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      });
    } else {
      swal({
        text: `Please login before you subscribe this class`,
        buttons: true,
        dangerMode: true,
      }).then((value) => {
        if (value) {
          this.setState({ isLog: "not" });
        }
      });
    }
  };

  render() {
    const {
      nameClass,
      teacherName,
      teacherPic,
      priceClass,
      descriptionClass,
      classPic,
      id_teacher,
    } = this.props;

    return (
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">
        {/* chưa có tài khoản sẽ ra chạy về login */}
        {this.state.isLog ? (
          this.state.isLog === "not" ? (
            <Redirect to="/login" className="nav-link"></Redirect>
          ) : null
        ) : null}

        <div className="courses">
          <div className="d-flex">
            <div className="icon">
              <span className={classPic}></span>
            </div>
            <div className="text">
              <h2>{nameClass}</h2>
              <div className="author-wrap d-flex align-items-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${API.API_CURRENT}/${teacherPic})` }}
                ></div>
                <Link to={`/teacher/${id_teacher}/profile`}>
                  <span className="author">{teacherName}</span>
                </Link>
              </div>
              <p className="rate">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <p className="lec">{descriptionClass}</p>
            </div>
          </div>
          <div className="text-center bg-light rounded py-2 my-3">
            <p className="course-price mb-0">
              <span>$ {priceClass} </span> / <span>course</span>
            </p>
          </div>
          <div className="text-center">
            <button
              id="1"
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
