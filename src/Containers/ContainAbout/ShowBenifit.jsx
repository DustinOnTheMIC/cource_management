import React, { Component } from 'react';
import BenifitItem from '../../Components/About/BenifitItem';
import imgAbout from '../../Assets/images/about.jpg'

class ShowBenifit extends Component {
    render() {
        return (
            <section class="ftco-section ftco-no-pt ftco-no-pb">
                <div class="container-xl">
                    <div class="row g-xl-5">
                        <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000" >
                            <div class="img w-100" style={{ backgroundImage: `url(${imgAbout})` }}>
                            </div>
                        </div>
                        <div class="col-md-6 heading-section d-flex align-items-center" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">
                            <div class="mt-0 my-lg-5 py-5">
                                <span class="subheading">Learn Anything</span>
                                <h2 class="mb-2">Benefits About Online Learning Expertise</h2>
                                <div class="row mt-4 g-lg-2">
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