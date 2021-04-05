import React, { Component } from 'react';
import ContainAllClass from '../Containers/ContainAllClass'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'
// import MoveToTop from '../Components/MoveToTop'
class AllClass extends Component {
    
    render() {
        let {id_subject} = this.props.match ? this.props.match.params : ''
        return (
            <div>
                <Header/>
                <ContainAllClass id_subject={id_subject}/>
                {/* <MoveToTop/> */}
                <Footer/>
            </div>
        );
    }
}

export default AllClass;