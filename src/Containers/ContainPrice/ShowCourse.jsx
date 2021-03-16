import React, { Component } from 'react';
import PriceCourseItem from '../../Components/Price/PriceCourseItem';


class ShowCourse extends Component {
    render() {
        return (
            <section class="ftco-section">
                <div class="container">
                    <div class="row">
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