import React, { Component } from 'react';


class SuccessStuItem extends Component {
    render() {
        let {name,img,role,des} = this.props;
        return (
            <div className="item">
                <div className="testimony-wrap">
                    <div className="text">
                        <div className="d-flex align-items-center mb-4">
                            <div className="user-img" style={{ backgroundImage: `url(${img})` }} >
                                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" />
                                </div>
                            </div>
                            <div className="ps-3 tx">
                                <p className="name">{name}</p>
                                <span className="position">{role}</span>
                            </div>
                        </div>
                        <p className="mb-4 msg">{des}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default (SuccessStuItem);