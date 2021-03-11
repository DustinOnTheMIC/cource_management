import React, { Component } from 'react';
import ContainAllClass from '../Containers/ContainAllClass'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
// import MoveToTop from '../Components/MoveToTop'
class AllClass extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContainAllClass/>
                {/* <MoveToTop/> */}
                <Footer/>
            </div>
        );
    }
}

export default AllClass;