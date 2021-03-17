import React, { Component } from 'react';
import Introduce from '../../Components/Common/Introduce/Introduce'
import Classes from '../../Components/AllClassBodyComponents/Classes'
class index extends Component {
    render() {
        return (
            <div>
                <Introduce pageTitle="Classes"/>
                <Classes/>
            </div>
        );
    }
}

export default index;