import React, { Component } from 'react';
import Introduce from '../../Components/AllClassBodyComponents/Introduce'
import Classes from '../../Components/AllClassBodyComponents/Classes'
class index extends Component {
    render() {
        return (
            <div>
                <Introduce/>
                <Classes/>
            </div>
        );
    }
}

export default index;