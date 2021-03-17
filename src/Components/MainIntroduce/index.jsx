import React, { Component } from 'react';
import bg3 from '../../Assets/images/bg_3.jpg'

class index extends Component {
    render() {
        return (
            <section className="ftco-section-counter img" style={{ backgroundImage: `url(${bg3})`}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row section-counter">
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"> {/**/}
                                <div className="icon">
                                    <span className="flaticon-graduation"></span>
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="countup">3000</span></h2>
                                    <span className="caption">Success Stories</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" > {/**/}
                                <div className="icon">
                                    <span className="flaticon-scientist"></span>
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="countup">320</span></h2>
                                    <span className="caption">Trusted Tutors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2 d-flex"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">  
                                <div className="icon">
                                    <span className="flaticon-calendar"></span>
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="countup">1000</span></h2>
                                    <span className="caption">Schedules</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"> 
                                <div className="icon">
                                    <span className="flaticon-learning"></span>
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="countup">587</span></h2>
                                    <span className="caption">Courses</span>
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