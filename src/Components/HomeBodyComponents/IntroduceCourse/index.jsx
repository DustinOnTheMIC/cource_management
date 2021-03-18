import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import image1 from '../../../Assets/images/image_1.jpg'


class index extends Component {
    
    render() {
        const {creater, date, comments, name, introduceContent, linkSubject, linkBackgroundImg} = this.props
        return (
            <div className="col-md-6 col-lg-4 d-flex">
                <div className="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >
                    <a href="blog-single.html" className="block-20 img" style={{ backgroundImage:`url(${image1})`}}>
                    </a>
                    <div className="text">
                        <p className="meta"><span><i className="fa fa-user me-1"></i>Admin</span> <span><i
                            className="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#"><i
                                className="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                        <h3 className="heading mb-3"><NavLink to="" >Build your Dream Software &amp; Engineering Career</NavLink></h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;