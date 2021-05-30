import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgItem from '../../Assets/images/image_3.jpg'

class BlogItem extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 d-flex">
                <div className="blog-entry justify-content-end" data-aos="flip-right" data-aos-duration="1000"
                    data-aos-delay="100">
                    <Link to="/blogs" className="block-20 img"
                        style={{ backgroundImage: `url(${imgItem})` }}>
                    </Link>
                    <div className="text">
                        <p className="meta"><span><i className="fa fa-user me-1"></i>Admin</span> <span><i
                            className="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#this"><i
                                className="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                        <h3 className="heading mb-3"><a href="#this">Build your Dream Software &amp; Engineering Career</a></h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default (BlogItem);