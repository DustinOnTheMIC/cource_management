import React, { Component } from 'react';
import image1 from '../../../Assets/images/image_1.jpg'
import image2 from '../../../Assets/images/image_2.jpg'
import image3 from '../../../Assets/images/image_3.jpg'

class index extends Component {
    render() {
        return (
            <section class="ftco-section bg-light ftco-no-pt">
                <div class="container-xl">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 heading-section text-center">{/*data-aos="fade-up" data-aos-duration="1000" */}
                            <span class="subheading">Our Blog</span>
                            <h2>Recent From Blog</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry justify-content-end">{/*data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" */}
                                <a href="blog-single.html" class="block-20 img" style={{ backgroundImage:`url(${image1})`}}>
                                </a>
                                <div class="text">
                                    <p class="meta"><span><i class="fa fa-user me-1"></i>Admin</span> <span><i
                                        class="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#"><i
                                            class="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                                    <h3 class="heading mb-3"><a href="#">Build your Dream Software &amp; Engineering Career</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry justify-content-end">{/*data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" */}
                                <a href="blog-single.html" class="block-20 img" style={{ backgroundImage:`url(${image2})`}}>
                                </a>
                                <div class="text">
                                    <p class="meta"><span><i class="fa fa-user me-1"></i>Admin</span> <span><i
                                        class="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#"><i
                                            class="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                                    <h3 class="heading mb-3"><a href="#">Build your Dream Software &amp; Engineering Career</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry justify-content-end">{/* data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" */}
                                <a href="blog-single.html" class="block-20 img" style={{backgroundImage:`url(${image3})`}}>
                                </a>
                                <div class="text">
                                    <p class="meta"><span><i class="fa fa-user me-1"></i>Admin</span> <span><i
                                        class="fa fa-calendar me-1"></i>Jan. 18, 2021</span> <span><a href="#"><i
                                            class="fa fa-comment me-1"></i> 3 Comments</a></span></p>
                                    <h3 class="heading mb-3"><a href="#">Build your Dream Software &amp; Engineering Career</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default index;