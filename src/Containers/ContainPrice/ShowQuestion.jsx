import React, { Component } from 'react';
import PriceQuestionItem from '../../Components/Price/PriceQuestionItem';

class ShowQuestion extends Component {
    render() {
        return (
            <div>
                <section class="ftco-section ftco-no-pt">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
                            <span class="subheading">FAQs</span>
                            <h2 class="mb-3">Frequesntly Ask Question</h2>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-8" data-aos="fade-up" data-aos-duration="1000">
                            <div class="accordion" id="accordionExample">
                                <PriceQuestionItem idCollapse="one" />
                                <PriceQuestionItem idCollapse="two" />
                                <PriceQuestionItem idCollapse="three" />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default (ShowQuestion);