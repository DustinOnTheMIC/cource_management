import React, { Component } from 'react';
import './CardExamCss.css'
class CardExam extends Component {
    render() {
        return (
            <div className=" col-9 col-md-7 col-lg-5 col-xl-3 mx-3">
            <div className="card user-card">
                <div className="card-block">
                    <div className="user-image">
                        <img src={this.props.img} className="img rounded-circle" alt="User-Profile-Image"></img>
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">{this.props.subject}</h6>
                    <p className="text-muted">Done | Passed </p>
                    <hr></hr>
                    <p className="text-muted m-t-15">Date: 30/2/2021</p>
                    <ul className="list-unstyled activity-leval">
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="bg-c-green counter-block m-t-10 p-20 ">
                        <div className="row justify-content-center">
                            {/* <div className="col-4">
                                <i className="fa fa-comment"></i>
                                <p>1256</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-user"></i>
                                <p>8562</p>
                            </div> */}
                            <div className="col-12">
                                <i className="">Result</i>
                                <p>90/100</p>
                            </div>
                        </div>
                    </div>
                    <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <hr></hr>
                    <div className="row justify-content-center user-social-link">
                        <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                        <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                        <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CardExam;