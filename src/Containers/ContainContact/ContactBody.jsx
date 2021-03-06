import React, { Component } from 'react';
import FormContact from '../../Components/Contact/Form/FormContact';
import InforAddress from '../../Components/Contact/InforAddress/InforAddress';
import Map from '../../Components/Contact/Map/Map';


class ContactBody extends Component {
    render() {
        return (
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row g-0">
                                    <div className="col-lg-6 order-lg-last">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3>Contact us</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <InforAddress />
                                            <FormContact />
                                            <div className="w-100 social-media mt-5">
                                                <h3>Follow us here</h3>
                                                <p>
                                                    <a href="#this">Facebook</a>
                                                    <a href="#this">Twitter</a>
                                                    <a href="#this">Instagram</a>
                                                    <a href="#this">Dribbble</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Map />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default (ContactBody);