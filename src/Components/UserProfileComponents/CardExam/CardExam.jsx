import React, { Component } from 'react';
import './CardExamCss.css'
class CardExam extends Component {
    render() {
        return (
            <div class=" col-9 col-md-7 col-lg-5 col-xl-3 mx-3">
            <div class="card user-card">
                <div class="card-block">
                    <div class="user-image">
                        <img src={this.props.img} class="img rounded-circle" alt="User-Profile-Image"></img>
                    </div>
                    <h6 class="f-w-600 m-t-25 m-b-10">{this.props.subject}</h6>
                    <p class="text-muted">Done | Passed </p>
                    <hr></hr>
                    <p class="text-muted m-t-15">Date: 30/2/2021</p>
                    <ul class="list-unstyled activity-leval">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="bg-c-green counter-block m-t-10 p-20">
                        <div class="row">
                            <div class="col-4">
                                <i class="fa fa-comment"></i>
                                <p>1256</p>
                            </div>
                            <div class="col-4">
                                <i class="fa fa-user"></i>
                                <p>8562</p>
                            </div>
                            <div class="col-4">
                                <i class="fa fa-suitcase"></i>
                                <p>189</p>
                            </div>
                        </div>
                    </div>
                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <hr></hr>
                    <div class="row justify-content-center user-social-link">
                        <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                        <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                        <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CardExam;