import React, { Component } from "react";
import * as API from '../../env'
import "../UserProfileComponents/UserProfile/UserProfileCss.css";

class InfoTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    this.handleDrawStart(this.props.rating);
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
    const { name, description, img, address, phone, email } = this.props;
    const { rate, isNotRated } = this.state;
    return (
      <div className="mb-5">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{
            backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")`,
          }}
        ></div>
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-4">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={`${API.API_CURRENT}/${img}`}
                        alt={name}
                        className="rounded-circle custom-img shadow"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{name}</h4>
                        <p className="text-secondary mb-1">{description}</p>

                        {
                          isNotRated ? "" :
                            <p className="rate">
                              { rate ? rate.map(item => item) : null}
                            </p> 
                        }
                          
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card mt-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">{name}</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">{email}</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">{phone}</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">{address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTeacher;
