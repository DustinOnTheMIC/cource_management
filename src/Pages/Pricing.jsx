import React, { Component } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import ShowCourse from '../Containers/ContainPrice/ShowCourse';
import ShowQuestion from '../Containers/ContainPrice/ShowQuestion';
import Introduce from '../Components/Common/Introduce/Introduce';
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'

AOS.init();

class Pricing extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Introduce pageTitle='Pricing' />
                <ShowCourse />
                <ShowQuestion />
                <Footer/>
            </div>
        );
    }
}

export default (Pricing);