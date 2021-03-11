import React, { Component } from 'react';
import Center from '../../Components/HomeBodyComponents/BodyCenter/Center'
import IntroduceInfo from '../../Components/HomeBodyComponents/IntroduceInfo'
import Bottom from '../../Components/HomeBodyComponents/BodyBottom'
import IntroduceCourse from '../../Components/HomeBodyComponents/IntroduceCourse'

class index extends Component {
    render() {
        return (
            <div>
                <Center/>
                <IntroduceInfo/>
                <Bottom/>
                <IntroduceCourse/>
            </div>
        );
    }
}

export default index;