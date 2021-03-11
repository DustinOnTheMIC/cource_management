import React, { Component } from 'react';
import bg3 from '../../Assets/images/bg_3.jpg'
class index extends Component {
    render() {
        return (
            <section class="ftco-section-counter img" style={{ backgroundImage: `url(${bg3})`}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row section-counter">
                        <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div class="counter-wrap-2 d-flex"> {/*data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"*/}
                                <div class="icon">
                                    <span class="flaticon-graduation"></span>
                                </div>
                                <div class="text">
                                    <h2 class="number"><span class="countup">3000</span></h2>
                                    <span class="caption">Success Stories</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div class="counter-wrap-2 d-flex"> {/*data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" */}
                                <div class="icon">
                                    <span class="flaticon-scientist"></span>
                                </div>
                                <div class="text">
                                    <h2 class="number"><span class="countup">320</span></h2>
                                    <span class="caption">Trusted Tutors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div class="counter-wrap-2 d-flex"> {/* data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" */}
                                <div class="icon">
                                    <span class="flaticon-calendar"></span>
                                </div>
                                <div class="text">
                                    <h2 class="number"><span class="countup">1000</span></h2>
                                    <span class="caption">Schedules</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div class="counter-wrap-2 d-flex"> {/*data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" */}
                                <div class="icon">
                                    <span class="flaticon-learning"></span>
                                </div>
                                <div class="text">
                                    <h2 class="number"><span class="countup">587</span></h2>
                                    <span class="caption">Courses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default index;