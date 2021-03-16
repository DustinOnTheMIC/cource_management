import React, { Component } from 'react';

class FormContact extends Component {
    render() {
        return (
            <form id="contactForm" name="contactForm" class="contactForm">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea name="message" class="form-control" id="message" cols="30" rows="4"
                                placeholder="Create a message here"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="submit" value="Send Message" class="btn btn-primary" />
                            <div class="submitting"></div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default (FormContact);