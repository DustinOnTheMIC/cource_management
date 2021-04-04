import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import ContactBody from '../Containers/ContainContact/ContactBody';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

class Team extends Component {
    componentDidMount() {
        console.log(localStorage.getItem('isLog'));
    }
    
    render() {
        return (
            <div>
                {/* PROPS NE */}
                <Header/>
                <Introduce pageTitle="Contact"/>
                <ContactBody />
                <Footer/>
            </div>
        );
    }
}

export default Team;