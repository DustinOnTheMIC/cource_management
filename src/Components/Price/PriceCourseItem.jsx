import React, { Component } from 'react';

class PriceCourseItem extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500">
                <div className="block-7">
                    <div className="text-center">
                        <span className="excerpt d-block">Ultimate Plan</span>
                        <span className="price"><sup>$</sup> <span className="number">149K</span></span>
                        <div className="p-4 px-lg-5">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.</p>
                        </div>
                        <a href="#this" className="btn btn-primary btn-outline-primary d-block px-2 py-3">Get Started</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default (PriceCourseItem);