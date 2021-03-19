import React, { Component } from 'react';
import Center from '../../Components/HomeBodyComponents/BodyCenter/Center'
import IntroduceInfo from '../../Components/MainIntroduce'
import Bottom from '../../Components/HomeBodyComponents/BodyBottom'
import IntroduceCourse from '../../Components/HomeBodyComponents/IntroduceCourse'

class index extends Component {
    render() {
        return (
            <div>
                <Center/>
                <IntroduceInfo/>
                <Bottom/>
                <section className="ftco-section bg-light ftco-no-pt">
                    <div className="container-xl">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
                                <span className="subheading">Our Subject</span>
                                <h2>ALL WHAT YOU NEED IS CHOOSE</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                                <IntroduceCourse/>
                                <IntroduceCourse/>
                                <IntroduceCourse/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;