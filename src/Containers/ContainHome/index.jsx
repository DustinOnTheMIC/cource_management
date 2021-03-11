import React, { Component } from 'react';
import Center from '../../Components/HomeBodyComponents/BodyCenter/Center'
import Header from '../../Components/Header'
import IntroduceInfo from '../../Components/HomeBodyComponents/IntroduceInfo'
import Bottom from '../../Components/HomeBodyComponents/BodyBottom'
import IntroduceCourse from '../../Components/HomeBodyComponents/IntroduceCourse'
import Footer from '../../Components/Footer'
import MoveToTop from '../../Components/MoveToTop'
class index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Center/>
                <IntroduceInfo/>
                <Bottom/>
                <IntroduceCourse/>
                <MoveToTop/>
                <Footer/>
            </div>
        );
    }
}

export default index;