import React, { Component } from 'react';
import SuccessStuItem from '../../Components/About/SuccessStuItem';

class ShowSuccessStu extends Component {
    render() {
        return (
            <section className="ftco-section testimony-section bg-light">
                <div className="container-xl">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-5">Our Successful Students</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div className="carousel-testimony">
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