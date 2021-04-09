import React, { Component } from 'react';
import './LoadingCss.css'

class Loading extends Component {
    render() {
        return (
            <div className='wrap-loading'>
                <div className="spinner">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        );
    }
}

export default Loading;