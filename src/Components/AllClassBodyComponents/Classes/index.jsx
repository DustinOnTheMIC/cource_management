import React, { Component } from "react";
import author1 from "../../../Assets/images/author-1.jpg";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import * as API from "../../../env";
import * as USER from '../../../constant'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      token: USER.TOKEN()
    };
  }
  

  handleSubscribe = (e) => {
    e.preventDefault();
    // this.setState({ isLog: null });
    this.setState({ isLog: USER.STATUS()})

    let id_class = this.props.id_class;
    let price = this.props.priceClass; //this.props.id khi map xong lấy price bỏ vô đây

    this.setState({token:`Bearer ${ USER.TOKEN() }`})

    this.props.handleLoading(true)
      //trường hợp đã đăng nhập => có token
      // let authorization = "bearer " + localStorage.getItem('token') //token đây
    swal({
      text: `Do you want to subscribe to this class?`,
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        if (USER.TOKEN()) {
        let data = {
          price: price,
          id_class: id_class,
        };
          axios.post(
            "https://quanlikhoahoc.herokuapp.com/api/v1/newRegister",
            data,
            {
              headers: {
                Authorization: this.state.token,
              },
            }
          )
          .then((res) => {
            swal(`Done! You just subscribe this class`, {
              icon: "success",
            });
            this.props.handleLoading(false)
          })
          .catch((err) => {
            swal(`The email has already been taken.`);
            this.props.handleLoading(false)
          });
        }else if (USER.STATUS() === 'fakeLog') {
        //trường hợp đăng nhập tạm (chưa có mật khẩu)
        let data = {
          name: USER.NAME(),
          email: USER.EMAIL(),
          phone: USER.PHONE(),
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
            this.props.handleLoading(false)
          })
          .catch((err) => {
            swal(`The email has already been taken.`);
            this.props.handleLoading(false)
          });
      } else if(!USER.STATUS() && !USER.TOKEN()) {
        this.props.handleLoading(false)
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
    }
    });
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
                  style={{ backgroundImage: `url(${author1})` }}
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
