import React, { Component } from 'react';
import person from '../../Assets/images/person_1.jpg'


class SuccessStuItem extends Component {
    render() {
        return (
            <div class="item">
                <div class="testimony-wrap">
                    <div class="text">
                        <div class="d-flex align-items-center mb-4">
                            <div class="user-img" style={{ backgroundImage: `url(${person})` }} >
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left" />
                                </div>
                            </div>
                            <div class="ps-3 tx">
                                <p class="name">Roger Scott</p>
                                <span class="position">Marketing Manager</span>
                            </div>
                        </div>
                        <p class="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default (SuccessStuItem);