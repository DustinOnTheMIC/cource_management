import React, { Component } from 'react';
import BenifitItem from '../../Components/About/BenifitItem';
import imgAbout from '../../Assets/images/about.jpg'

class ShowBenifit extends Component {
    render() {
        return (
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container-xl">
                    <div className="row g-xl-5">
                        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000" >
                            <div className="img w-100" style={{ backgroundImage: `url(${imgAbout})` }}>
                            </div>
                        </div>
                        <div className="col-md-6 heading-section d-flex align-items-center" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">
                            <div className="mt-0 my-lg-5 py-5">
                                <span className="subheading">Learn Anything</span>
                                <h2 className="mb-2">Benefits About Online Learning Expertise</h2>
                                <div className="row mt-4 g-lg-2">
                                    <BenifitItem />
                                    <BenifitItem />
                                    <BenifitItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default (ShowBenifit);