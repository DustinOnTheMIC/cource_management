import React, { Component } from 'react';
import Introduce from '../Components/Common/Introduce/Introduce';
import BlogBody from '../Containers/ContainBlog/BlogBody';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


class Blogs extends Component {
    render() {
        return (
            <div>
                <Introduce pageTitle="Blogs" />
                <BlogBody />
            </div>
        );
    }
}

export default (Blogs);