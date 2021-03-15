import React, { Component } from 'react';
import bg1 from '../../../Assets/images/bg_1.jpg'
import about from '../../../Assets/images/about.jpg'

class Center extends Component {
    render() {
        return (
            <div>
                <section class="hero-wrap" style={{ backgroundImage: `url(${bg1})` }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center">
                            <div class="col-lg-5">
                                <div class="text mt-5 pt-5" > {/*data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" */}
                                    <span class="subheading">Welcome to Academia</span>
                                    <h1 class="mb-4">Best Online Education Expertise </h1>
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p>
                                        <a href="#this" class="btn btn-primary p-4 py-3">Get Started Now!
                                    <span class="ion-ios-arrow-round-forward"></span>
                                        </a>
                                        <a href="#this" class="btn btn-white p-4 py-3">View Course
                                    <span class="ion-ios-arrow-round-forward"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="ftco-section ftco-no-pt ftco-no-pb">
                    <div class="container-xl">
                        <div class="row g-xl-5">
                            <div class="col-md-6 d-flex align-items-stretch" >{/*data-aos="fade-up" data-aos-delay="100"
                                data-aos-duration="1000"*/}
                                <div class="img w-100" style={{ backgroundImage:`url(${about})`}}>
                                </div>
                            </div>
                            <div class="col-md-6 heading-section d-flex align-items-center" >{/*data-aos="fade-up" data-aos-delay="200"
                                data-aos-duration="1000"*/}
                                <div class="mt-0 my-lg-5 py-5">
                                    <span class="subheading">Learn Anything</span>
                                    <h2 class="mb-2">Benefits About Online Learning Expertise</h2>
                                    <div class="row mt-4 g-lg-2">
                                        <div class="col-lg-12 d-flex align-items-stretch services-wrap">
                                            <div class="services d-flex">
                                                <div class="icon"><span class="flaticon-online-learning"></span></div>
                                                <div class="text">
                                                    <h2>Online Courses</h2>
                                                    <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex align-items-stretch services-wrap">
                                            <div class="services d-flex">
                                                <div class="icon"><span class="flaticon-certificate"></span></div>
                                                <div class="text">
                                                    <h2>Earn A Certificates</h2>
                                                    <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex align-items-stretch services-wrap">
                                            <div class="services d-flex">
                                                <div class="icon"><span class="flaticon-scientist"></span></div>
                                                <div class="text">
                                                    <h2>Learn with Expert</h2>
                                                    <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Center;