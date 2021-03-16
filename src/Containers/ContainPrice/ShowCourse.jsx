import React, { Component } from 'react';
import PriceCourseItem from '../../Components/Price/PriceCourseItem';


class ShowCourse extends Component {
    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <PriceCourseItem />
                        <PriceCourseItem />
                        <PriceCourseItem />
                        <PriceCourseItem />
                    </div>
                </div>
            </section>
        );
    }
}

export default (ShowCourse);