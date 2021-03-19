import React, { Component } from 'react';
import './UserProfileCss.css'
class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")` }}>
                    <div className="container introduce">
                        <div className="text-center row ">
                            <div className="col-12">
                                <h1 className="text-light">Hi Christian Louboutin</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main main-raised">
                    <div className="profile-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile">
                                        <div className="avatar col-9 col-xl-4 col-lg-6 col-md-6">
                                            <img src="https://www.livelingua.com/img/profilesTeachers/103/Guillaume-Deneufbourg-Square_Profile_S.jpg" alt="Circle" className="img-raised rounded-circle img-fluid"></img>
                                        </div>

                                    </div>
                                </div>
                                <div className="name d-inline-block align-items-center container">
                                    <div className="col-4 d-flex align-items-center">
                                        <h3 className="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div className="col-4">
                                        <i className="fas fa-pen btn btn-primary"></i>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <h3 className="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div className="col-4">
                                            <button className="ml-3 btn btn-primary">asdasd</button>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <h3 className="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div className="col-4">
                                            <button className="ml-3 btn btn-primary">asdasd</button>
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

export default UserProfile;