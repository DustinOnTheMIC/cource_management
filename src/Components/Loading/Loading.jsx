import React, { Component } from 'react';
import './LoadingCss.css'

class Loading extends Component {
    render() {
        return (
            <div className='wrap-loading'>
                <div class="spinner">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            </div>
        );
    }
}

export default Loading;