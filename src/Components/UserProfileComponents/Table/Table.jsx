import React, { Component } from 'react';
import './css/main.css'
import './css/util.css'

class NextExam extends Component {
    
    render() {
        
        const { title, userClasses, userExam } = this.props;

        return (
            <div className="col-12 mb-5">
                <h1 className="title col-12 text-center">{ title }</h1>
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
                                    { userClasses ? 
                                        userClasses.subjects.map( item => 
                                            <tr className="row100 body">
                                                <td className="cell100 column1">{ item }</td>
                                            </tr>
                                        ) 
                                    :
                                        userExam.subjectsExam.map(item =>
                                            <tr className="row100 body">
                                                <td className="cell100 column1">{ item }</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="wrap-table100-nextcols js-pscroll" id='scroll'>
                            <div className="table100-nextcols">
                                <table>
                                    <thead>
                                        
                                        <tr className="row100 head">
                                            <th className="cell100 column2">Class</th>
                                            <th className="cell100 column3">Date Start</th>
                                            { title === "Your Classes" ? <th className="cell100 column4">Date end</th> : <th className="cell100 column4">Start Time</th> }
                                            { title === "Your Classes" ? <th className="cell100 column4">Teacher</th> : <th className="cell100 column6">Time (minutes)</th> }
                                        </tr>

                                    </thead>
                                    <tbody>

                                        { title === "Your Classes" ?

                                            userClasses.classes.map( item =>
                                                <tr className="row100 body">
                                                    <td className="cell100 column2"><a href="">{ item.className }</a></td>
                                                    <td className="cell100 column3">{ item.dateStart }</td>
                                                    <td className="cell100 column4">{ item.dateEnd }</td>
                                                    <td className="cell100 column6">{ item.teacher }</td>
                                                </tr>    
                                            )
                                            
                                            : ""
                                        }

                                        { title === "Next Exam" ?

                                            userExam.exam.map( item =>
                                                <tr className="row100 body">
                                                    <td className="cell100 column2"><a href="https://" title={item.id}>{ item.className }</a></td>
                                                    <td className="cell100 column3">{ item.dateStart }</td>
                                                    <td className="cell100 column4">{ item.timeStart }</td>
                                                    <td className="cell100 column6">{ item.duration }</td>
                                                </tr>
                                            )

                                            : ""
                                        }

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