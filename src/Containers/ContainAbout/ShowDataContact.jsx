import React, { Component } from 'react';
import bg_3 from '../../Assets/images/bg_3.jpg'
import DataItem from '../../Components/About/DataItem';


class ShowDataContact extends Component {
    render() {
        return (
            <section className="ftco-section-counter img" style={{ backgroundImage: `url(${bg_3})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row section-counter">
                        <DataItem />
                        <DataItem />
                        <DataItem />
                        <DataItem />
                    </div>
                </div>
            </section>
        );
    }
}

export default (ShowDataContact);