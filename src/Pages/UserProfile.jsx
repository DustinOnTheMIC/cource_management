import React, { Component } from 'react';
import UserProfileCPN from '../Components/UserProfileComponents/UserProfile/UserProfile'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <UserProfileCPN/>
                <Footer/>
            </div>
        );
    }
}

export default UserProfile;