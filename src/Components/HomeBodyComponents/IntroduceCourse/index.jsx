import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class index extends Component {
    
    render() {
        const { name, img } = this.props
        return (
            <div className="col-md-6 col-lg-4 d-flex">
                <div className="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >
                    <a href="blog-single.html" className="block-20 img" style={{ backgroundImage:`url(${img})`}}>
                    </a>
                    <div className="text">
                        <p className="meta"><span><i className="fa fa-user me-1"></i>Admin</span> <span><i
                            className="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#this"><i
                                className="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                        <h3 className="heading mb-3"><NavLink to="" >Build your Dream Software with {name}</NavLink></h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;