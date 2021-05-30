import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col text-center">
                    <div className="block-27">
                        <ul>
                            <li><a href="#this">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#this">2</a></li>
                            <li><a href="#this">3</a></li>
                            <li><a href="#this">4</a></li>
                            <li><a href="#this">5</a></li>
                            <li><a href="#this">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Pagination);