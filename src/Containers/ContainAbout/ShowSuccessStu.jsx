import React, { Component } from 'react';
import SuccessStuItem from '../../Components/About/SuccessStuItem';


class ShowSuccessStu extends Component {
    render() {
        return (
            <section class="ftco-section testimony-section bg-light">
                <div class="container-xl">
                    <div class="row justify-content-center pb-4">
                        <div class="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
                            <span class="subheading">Testimonial</span>
                            <h2 class="mb-5">Our Successful Students</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div class="carousel-testimony">
                                <SuccessStuItem />                                
                                <SuccessStuItem />                                
                                <SuccessStuItem />                                
                                <SuccessStuItem />                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default (ShowSuccessStu);