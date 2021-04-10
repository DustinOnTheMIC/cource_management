import React, { Component } from 'react';
import './css/main.css'
import './css/util.css'

class NextExam extends Component {

    
    render() {
        return (
            <div className="col-12 mb-5">
                <h1 className="title col-12 text-center">Next Exam</h1>
                <div className="wrap-table100" >
                    <div className="table100 ver1">
                        <div className="table100-firstcol">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column1">Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="row100 body">
                                        <td className="cell100 column1">Java Basic</td>
                                    </tr>

                                    <tr className="row100 body">
                                        <td className="cell100 column1">React JS</td>
                                    </tr>

                                    <tr className="row100 body">
                                        <td className="cell100 column1">PHP</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="wrap-table100-nextcols js-pscroll" id='scroll'>
                            <div className="table100-nextcols">
                                <table>
                                    <thead>
                                        
                                        <tr className="row100 head">
                                            <th className="cell100 column2">Class</th>
                                            <th className="cell100 column3">Start date</th>
                                            <th className="cell100 column4">Start Time</th>
                                            <th className="cell100 column6">Time (minutes)</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr className="row100 body">
                                            <td className="cell100 column2"><a href="">DKM-DTU</a></td>
                                            <td className="cell100 column3">16 Nov 2012</td>
                                            <td className="cell100 column4">9:00 AM</td>
                                            <td className="cell100 column6">30</td>
                                        </tr>

                                        <tr className="row100 body">
                                            <td className="cell100 column2"><a href="">DTU-CL</a></td>
                                            <td className="cell100 column3">16 Nov 2015</td>
                                            <td className="cell100 column4">10:00 AM</td>
                                            <td className="cell100 column6">26</td>
                                        </tr>

                                        <tr className="row100 body">
                                            <td className="cell100 column2"><a href="">CC-DTU</a></td>
                                            <td className="cell100 column3">16 Nov 2013</td>
                                            <td className="cell100 column4">1:35 PM</td>
                                            <td className="cell100 column6">32</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextExam;