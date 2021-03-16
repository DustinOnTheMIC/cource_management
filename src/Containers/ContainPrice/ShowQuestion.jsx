import React, { Component } from 'react';
import PriceQuestionItem from '../../Components/Price/PriceQuestionItem';

class ShowQuestion extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-no-pt">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
                            <span className="subheading">FAQs</span>
                            <h2 className="mb-3">Frequesntly Ask Question</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-8" data-aos="fade-up" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
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