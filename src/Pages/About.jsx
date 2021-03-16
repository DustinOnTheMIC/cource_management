import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import ShowBenifit from '../Containers/ContainAbout/ShowBenifit';
import ShowDataContact from '../Containers/ContainAbout/ShowDataContact';
import ShowSuccessStu from '../Containers/ContainAbout/ShowSuccessStu';

class About extends Component {
    render() {
        return (
            <div>
                <Introduce pageTitle="About" />
                <ShowBenifit />
                <ShowDataContact />
                <ShowSuccessStu />
            </div>
        );
    }
}

export default (About);