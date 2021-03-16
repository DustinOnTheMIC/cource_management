import React, { Component } from 'react';
import FormContact from '../../Components/Contact/Form/FormContact';
import InforAddress from '../../Components/Contact/InforAddress/InforAddress';
import Map from '../../Components/Contact/Map/Map';

class ContactBody extends Component {
    render() {
        return (
            <section class="ftco-section bg-light">
                <div class="container">
                    <div class="row no-gutters justify-content-center">
                        <div class="col-md-12">
                            <div class="wrapper">
                                <div class="row g-0">
                                    <div class="col-lg-6 order-lg-last">
                                        <div class="contact-wrap w-100 p-md-5 p-4">
                                            <h3>Contact us</h3>
                                            <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <InforAddress />
                                            <FormContact />
                                            <div class="w-100 social-media mt-5">
                                                <h3>Follow us here</h3>
                                                <p>
                                                    <a href="#">Facebook</a>
                                                    <a href="#">Twitter</a>
                                                    <a href="#">Instagram</a>
                                                    <a href="#">Dribbble</a>
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