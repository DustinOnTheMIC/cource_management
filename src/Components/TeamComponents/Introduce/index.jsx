import React, { Component } from 'react';
import bg2 from '../../../Assets/images/bg_2.jpg'
class index extends Component {
    render() {
        return (
            <section class="hero-wrap hero-wrap-2" style={{ backgroundImage:`url(${bg2})`}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 pt-5 mt-5 text-center">
                            <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i
                                class="fa fa-chevron-right"></i></a></span> <span>Team <i class="fa fa-chevron-right"></i></span></p>
                            <h1 class="mb-0 bread">Team</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default index;