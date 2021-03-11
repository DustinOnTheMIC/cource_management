import React, { Component }from 'react';
import ContainHome from '../Containers/ContainHome'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MoveToTop from '../Components/MoveToTop'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContainHome/>
                <MoveToTop/>
                <Footer/>
            </div>
        );
    }
}

export default Home;