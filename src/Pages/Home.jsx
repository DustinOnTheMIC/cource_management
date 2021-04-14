import React, { Component }from 'react';
import ContainHome from '../Containers/ContainHome'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'
// import ChatBot from '../Components/ChatBot'

class Home extends Component {

    render() {
        
        return (
            <div>
                <Header/>
                <ContainHome/>
                {/* <ChatBot/> */}
                <Footer/>
            </div>
        );
    }
}

export default Home;