import React, { Component } from 'react';

class DataItem extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div className="icon">
                        <span className="flaticon-learning"></span>
                    </div>
                    <div className="text">
                        <h2 className="number"><span className="countup">587</span></h2>
                        <span className="caption">Courses</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default (DataItem);