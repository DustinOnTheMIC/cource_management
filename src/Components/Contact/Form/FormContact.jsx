import React, { Component } from 'react';

class FormContact extends Component {
    render() {
        return (
            <form id="contactForm" name="contactForm" className="contactForm">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4"
                                placeholder="Create a message here"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                            <div className="submitting"></div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default (FormContact);