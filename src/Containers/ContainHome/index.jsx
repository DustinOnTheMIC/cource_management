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
                                <IntroduceCourse name="Javascript" img="https://sogo.edu.vn/wp-content/uploads/2019/08/javascript-la-gi.jpg"/>
                                <IntroduceCourse name="Java" img="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_java13.jpg"/>
                                <IntroduceCourse name="PHP" img="https://codewebdao.com/upload/users/1/img/hinhminhhoa/php/php.png"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;