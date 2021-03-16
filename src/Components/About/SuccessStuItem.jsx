import React, { Component } from 'react';
import person from '../../Assets/images/person_1.jpg'


class SuccessStuItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="testimony-wrap">
                    <div className="text">
                        <div className="d-flex align-items-center mb-4">
                            <div className="user-img" style={{ backgroundImage: `url(${person})` }} >
                                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" />
                                </div>
                            </div>
                            <div className="ps-3 tx">
                                <p className="name">Roger Scott</p>
                                <span className="position">Marketing Manager</span>
                            </div>
                        </div>
                        <p className="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default (SuccessStuItem);