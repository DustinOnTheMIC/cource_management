import React, { Component } from 'react';
import Introduce from '../../Components/TeamComponents/Introduce'
import TeamMember from '../../Components/TeamComponents/TeamMembers'
class index extends Component {
    render() {
        return (
            <div>
                <Introduce/>
                <TeamMember/>
            </div>
        );
    }
}

export default index;