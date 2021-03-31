import React, { Component } from "react";
import author1 from "../../../Assets/images/author-1.jpg";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios"

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLog : false
    }
  }
  handleSubscribe = (e) => {
    swal({
      text: `Do you want to subscribe to this class?`,
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        if(localStorage.getItem('token')) { //trường hợp đã đăng nhập => có token
          console.log("called");
          let authorization = "bearer " + localStorage.getItem('token') //token đây
          let id_class = 1 
          let price = 2000 //this.props.id khi map xong lấy price bỏ vô đây
          let data = {
            price: price,
            id_class: id_class
          }
    
          axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/newRegister', data, {
            headers: {
              'Authorization': authorization
            }
          })
          .then(res => {
            swal(`Done! You just subscribe this class`, {
              icon: "success",
            });
          })
          .catch(err =>{
            console.log(err);
          })
        }
        else if(localStorage.getItem('isLog')==='fakeLog') { //trường hợp đăng nhập tạm (chưa có mật khẩu)
          let name = localStorage.getItem('name')
          let email = localStorage.getItem('email')
          let phone = localStorage.getItem('phone')
          let id_class = 1 
          let price = 2000 //this.props.id khi map xong lấy price bỏ vô đây
    
          let data = {
            name: name,
            email: email,
            phone: phone,
            price: price,
            id_class: id_class
          }
          axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/auth/register',data)
          .then(res => {
            swal(`Done! You just subscribe this class`, {
              icon: "success",
            });
          })
          .catch(err => {
            console.log(err);
          })
        } else { //chưa đăng nhập thì setstate để chạy cái dưới render
          this.setState({isLog: false})
        }
      }
    });
  }
    

  render() {
    const { id_class, name, rate, teacherName, teacherPic, price, link } = this.props;
    //để vậy sau này add vào sau

    return (
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">
        {/* chưa có tài khoản sẽ ra chạy về login */}
        {this.state.isLog ? <NavLink to="/login" className="nav-link"></NavLink> : ""} 
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
              id='1'
              onClick={(e) => this.handleSubscribe(e)}
              className="btn d-block btn-primary btn-outline-primary py-3 col-12">
              Enroll Now!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
