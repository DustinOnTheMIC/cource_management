import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import BlogBody from '../Containers/ContainBlog/BlogBody';
import Footer from '../Components/Footer'
import Header from '../Components/Header'


class Blogs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Introduce pageTitle="Blogs" />
                <BlogBody />
                <Footer/>
            </div>
        );
    }
}

export default (Blogs);