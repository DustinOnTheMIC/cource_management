import React, { Component } from 'react';


class InforAddress extends Component {
    render() {
        return (
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                        <div className="text">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                        <div className="text">
                            <p><span>Email:</span> <a
                                href="cdn-cgi/l/email-protection#3950575f567940564c4b4a504d5c175a5654"><span
                                    className="__cf_email__"
                                    data-cfemail="177e797178576e786265647e63723974787a">[email&#160;protected]</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                        <div className="text">
                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (InforAddress);