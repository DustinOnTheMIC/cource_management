import React, { Component } from 'react';
import './UserProfileCss.css'
import swal from 'sweetalert';
import CardExam from '../CardExam/CardExam'
class UserProfile extends Component {
    handleChange = (e) => {
        e.preventDefault();
        swal({
            text: `Enter your new ${e.target.name}`,
            buttons: true,
            dangerMode: true,
            content: 'input'
        })
            .then((value) => {
                if (value) {
                    //call API to changed
                    swal(`Done! You just change your ${e.target.name} to ${value}`, {
                        icon: "success",
                    });
                    
                }
        });
        if(e.target.name === 'password'){
            swal({
                text: `Enter your old password`,
                buttons: true,
                dangerMode: true,
                content: 'input'
            })
            .then((value) => {
                if (value) {
                    //call API check old password
                    swal({
                        text: `Enter your new password`,
                        buttons: true,
                        dangerMode: true,
                        content: 'input'
                    }).then((value) => {
                        //call API change password
                        swal(`Done! You just change your ${e.target.name} to ${value}`, {
                            icon: "success",
                        });
                    })
                    
                }
            });
        }
    }

    render() {
        return (
            <div className="mb-5">
                <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")` }}>
                    <div className="container introduce">
                        <div className="text-center row ">
                            <div className="col-12">
                                <h1 className="text-light">Hi Dustin On The MIC</h1>
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
                                        <div className="avatar col-5 col-xl-4 col-lg-5 col-md-6">
                                            <img src="https://i.pinimg.com/564x/fc/8f/4b/fc8f4bf12fdaa964f267e79d83324ab3.jpg" alt="Circle" className="img-raised rounded-circle img-fluid"></img>
                                        </div>

                                    </div>
                                </div>
                                <div className="name d-flex flex-wrap mt-4 justify-content-center">
                                    <div class="panel col-xl-8 col-md-9">
                                        <div class="panel-body bio-graph-info">
                                            <h1 className="title" >Bio Graph</h1>
                                            <div class="bio-row row col-12 col-md-6">
                                                <p>
                                                    <span>Name </span>: 
                                                    <button 
                                                        className="btn btn-outline-light text-info" 
                                                        name='name' 
                                                        onClick={(e) => this.handleChange(e)}>Dustin On The MIC
                                                    </button>
                                                </p>
                                            </div>
                                            <div class="bio-row row col-12 col-md-6">
                                                <p>
                                                    <span>Phone Number </span>:  
                                                    <button 
                                                        className="btn btn-outline-light text-info" 
                                                        name='phone number' 
                                                        onClick={(e) => this.handleChange(e)}> (+84) 999 999 799
                                                    </button>
                                                </p>
                                            </div>
                                            <div class="bio-row row col-12 col-md-6">
                                                <p>
                                                    <span>Email </span>: 
                                                    <button 
                                                        className="btn btn-outline-light text-info" 
                                                        name='email' 
                                                        onClick={(e) => this.handleChange(e)}>Buiductinwork@gmail.com
                                                    </button>
                                                </p>
                                            </div>
                                            <div class="bio-row row col-12 col-md-6">
                                                <p>
                                                    <span>Password </span>:
                                                    <button 
                                                        className="btn btn-outline-light text-info" 
                                                        name='password'
                                                        onClick={(e) => this.handleChange(e)}> **********
                                                    </button> 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="title col-12 text-center">Your Exam</h1>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <CardExam subject="Javascript" img="https://tinhocaz.com/wp-content/uploads/2020/10/validate-js.png"/>
                                    <CardExam subject="Java" img="https://www.techtalkthai.com/wp-content/uploads/2015/12/java_banner.jpg"/>
                                    <CardExam subject="PHP" img="http://dotnetguru.org/wp-content/uploads/2019/08/php.jpg"/>
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