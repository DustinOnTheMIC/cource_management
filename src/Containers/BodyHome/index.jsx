import React, { Component } from 'react';
import Top from '../../Components/HomeBodyComponents/BodyTop/Top'
import Center from '../../Components/HomeBodyComponents/BodyCenter/Center'
import Header from '../../Components/Header'
import IntroductionInfo from '../../Components/HomeBodyComponents/IntroductionInfo'
import Bottom from '../../Components/HomeBodyComponents/BodyBottom'
import GetEmail from '../../Components/GetEmail'
import Footer from '../../Components/Footer'
class index extends Component {
    render() {
        return (
            <div>
                <Top/>
                <Header/>
                <Center/>
                <IntroductionInfo/>
                <Bottom/>
                <GetEmail/>
                <Footer/>
            </div>
        );
    }
}

export default index;