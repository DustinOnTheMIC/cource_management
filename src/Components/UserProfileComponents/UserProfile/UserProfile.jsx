import React, { Component } from 'react';
import './UserProfileCss.css'
class UserProfile extends Component {
    render() {
        return (
            <div>
                <div class="page-header header-filter" data-parallax="true" style={{ backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")` }}>
                    <div class="container introduce">
                        <div class="text-center row ">
                            <div class="col-12">
                                <h1 class="text-light">Hi Christian Louboutin</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile">
                                        <div class="avatar col-9 col-xl-4 col-lg-6 col-md-6">
                                            <img src="https://www.livelingua.com/img/profilesTeachers/103/Guillaume-Deneufbourg-Square_Profile_S.jpg" alt="Circle" class="img-raised rounded-circle img-fluid"></img>
                                        </div>

                                    </div>
                                </div>
                                <div class="name d-inline-block align-items-center container">
                                    <div class="col-4 d-flex align-items-center">
                                        <h3 class="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div class="col-4">
                                        <i class="fas fa-pen btn btn-primary"></i>
                                        </div>
                                    </div>
                                    <div class="col-4 d-flex align-items-center">
                                        <h3 class="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div class="col-4">
                                            <button class="ml-3 btn btn-primary">asdasd</button>
                                        </div>
                                    </div>
                                    <div class="col-4 d-flex align-items-center">
                                        <h3 class="title col-8 px-0 text-right">Christian Louboutin</h3>
                                        <div class="col-4">
                                            <button class="ml-3 btn btn-primary">asdasd</button>
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