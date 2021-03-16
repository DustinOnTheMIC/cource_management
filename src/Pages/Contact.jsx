import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import ContactBody from '../Containers/ContainContact/ContactBody';

class Team extends Component {
    render() {
        return (
            <div>
                {/* PROPS NE */}
                <Introduce pageTitle="Contact"/>
                <ContactBody />
            </div>
        );
    }
}

export default Team;