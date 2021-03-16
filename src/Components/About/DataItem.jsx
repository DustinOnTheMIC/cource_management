import React, { Component } from 'react';

class DataItem extends Component {
    render() {
        return (
            <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div class="icon">
                        <span class="flaticon-learning"></span>
                    </div>
                    <div class="text">
                        <h2 class="number"><span class="countup">587</span></h2>
                        <span class="caption">Courses</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default (DataItem);