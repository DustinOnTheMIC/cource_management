import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import * as API from "../../../env";
import * as USER from '../../../constant';
import { axiosService } from '../../../Services/axiosServices';
import { URL } from '../../../env';
import { messageServices } from '../../../Services/messageService';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      token: USER.TOKEN()
    };
  }

  componentDidMount() {
    this.handleDrawStart(this.props.teacher_rate);
  }
  
  
  handleSubscribe(e) {

    e.preventDefault();

    this.setState({ isLog: USER.STATUS()});
    this.setState({token:`Bearer ${ USER.TOKEN() }`});
    let id_class = this.props.id_class;
    let price = this.props.priceClass;

    this.props.handleLoading(true);

      messageServices.showConfirmMessage('Do you want to subscribe to this class?')
      .then(
        value => {
          if(value) {
            this.props.handleLoading(true);

          if(!USER.STATUS() && !USER.TOKEN()) {
              this.handleMoveToLogin();

          } else {
            const info = {
              token: this.state.token,
              data: {
                price: price,
                id_class: id_class,
                name: USER.NAME(),
                email: USER.EMAIL(),
                phone: USER.PHONE(),
              }
            }

            axiosService.subscribeClass(info)
            .then( () => this.handleSubscribeSuccess())
            .catch( err => this.handleSubscribeFailed(err));
          }
        }
      }
    );
  }

  handleMoveToLogin() {
    this.props.handleLoading(false);
    messageServices.showConfirmMessage(`Please login before you subscribe this class`)
    
    .then((value) => {
      if (value) {
        this.setState({ isLog: "not" });
      }
    });
  }

  handleSubscribeSuccess() {
    this.props.handleLoading(false);
    return messageServices.showMessage('Done! You just subscribe this class', "success");
  }

  handleSubscribeFailed(err) {

    this.props.handleLoading(false);
    const status = err.response.status;

    if(status === 500){
      messageServices.showMessage(`Please pay the tuition for the previous class before you subscribe one.`, "warning");

    } else if(status === 401) {

      messageServices.showMessage('Please Login again to use this feature.', "error")
      .then(value => {
        if(value) {
          this.setState({ isLog: 'not' })
        }
      });

    } else if(status === 422) {
      messageServices.showMessage('You can not subscribe this class again, find another class please.');

    } else {
      messageServices.showMessage('There is an error with the server, please try again.', "error");
    }
  }

  handleDrawStart(rateStart) {
    let rate = [];

    if(rateStart < 1) {
        return this.setState({isNotRated: true});

    } else {
        
        for(let i = 1; i <= rateStart; i++) {
          rate.push(<span className="fa fa-star"></span>);
        }

        if(rateStart < 5) {
            let temp = 5 - rateStart;
            for(let i = 1; i <= temp; i ++) {
              rate.push(<span className="far fa-star"></span>);
            }
        }
    }

    this.setState({ rate });
  }

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

    const { rate, isNotRated } = this.state;

    return (
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">

        {this.state.isLog ? (
          this.state.isLog === "not" ? (
            <Redirect to="/login" className="nav-link"></Redirect>
          ) : null
        ) : null}
        
        <div className="courses">
          <div className="d-flex">
            {
              classPic !== "." ? 
                <div className="icon" style={{backgroundColor: "#FFFFFF"}}>
                  <i className={classPic}></i>
                </div>
              :
                null
            }
            
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
              <div className="rate">
                
                {
                  isNotRated ? "" :
                    <span className="rate">
                      { rate ? rate.map(item => item) : null}
                    </span> 
                }

              </div>
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
