import React, { Component } from 'react';
import ShowInfoTeacher from "../Containers/ContainTeacher/ShowInfoTeacher";
import Footer from '../Components/Footer'
import Header from '../Components/Header/Index'

class TeacherProfile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ShowInfoTeacher />
                <Footer/>
            </div>
        );
    }
}

export default TeacherProfile;