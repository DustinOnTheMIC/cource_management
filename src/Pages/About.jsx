import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import ShowBenifit from '../Containers/ContainAbout/ShowBenifit';
import ShowSuccessStu from '../Containers/ContainAbout/ShowSuccessStu';
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'
import IntroduceInfo from "../Components/MainIntroduce";

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Introduce pageTitle="About" />
                <ShowBenifit />
                <IntroduceInfo />
                <ShowSuccessStu />
                <Footer/>
            </div>
        );
    }
}

export default (About);