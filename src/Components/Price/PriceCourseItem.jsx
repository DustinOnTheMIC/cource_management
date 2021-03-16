import React, { Component } from 'react';

class PriceCourseItem extends Component {
    render() {
        return (
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="500">
                <div class="block-7">
                    <div class="text-center">
                        <span class="excerpt d-block">Ultimate Plan</span>
                        <span class="price"><sup>$</sup> <span class="number">149K</span></span>
                        <div class="p-4 px-lg-5">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.</p>
                        </div>
                        <a href="#" class="btn btn-primary btn-outline-primary d-block px-2 py-3">Get Started</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default (PriceCourseItem);