import React, { Component } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import ShowCourse from '../Containers/ContainPrice/ShowCourse';
import ShowQuestion from '../Containers/ContainPrice/ShowQuestion';
import Introduce from '../Components/Common/Introduce/Introduce';
AOS.init();

class Pricing extends Component {
    render() {
        return (
            <div>
                <Introduce pageTitle='Pricing' />
                <ShowCourse />
                <ShowQuestion />
            </div>
        );
    }
}

export default (Pricing);