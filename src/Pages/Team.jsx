import React, { Component } from 'react';
import ContainTeam from '../Containers/ContainTeam'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index' 
// import MoveToTop from '../Components/MoveToTop'
import MainIntroduce from '../Components/MainIntroduce'
class Team extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContainTeam/>
                {/* <MoveToTop/> */}
                <MainIntroduce/>
                <Footer/>
            </div>
        );
    }
}

export default Team;