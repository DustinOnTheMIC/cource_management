import React, { Component } from 'react';
import './CardExamCss.css';
import * as API from '../../../env';

class CardExam extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { scores } = this.props.doneExam;
        this.checkPercent(scores);

    }

    checkPercent(scores) {
        console.log(this.props);
        if(scores >= 10) {
            return this.setStatusBar(5);
        }
        
        if(scores >= 8) {
            return this.setStatusBar(4);
        }
        
        if(scores >= 6) {
            return this.setStatusBar(3);
        }
        
        if(scores >= 4) {
            return this.setStatusBar(2);
        }

        if(scores >= 2) {
            return this.setStatusBar(1);
        }

        return this.setStatusBar(0);
    }

    setStatusBar(percent) {
        let statusBar = [];

        if(percent < 1) {
            for(let i = 1; i <= 5; i++) {
                statusBar.push(<li></li>);
            }

        } else {
            
            for(let i = 1; i <= percent; i++) {
                statusBar.push(<li className="active"></li>);
            }

            if(percent < 5) {
                let temp = 5 - percent;
                for(let i = 1; i <= temp; i ++) {
                    statusBar.push(<li></li>);
                }
            }
        }

        this.setState({ statusBar });
    }

    render() {
        const { statusBar } = this.state;
        const { subjectImage, subjectName, examDate, examTime, rightAns, wrongAns, className, scores } = this.props.doneExam;
        const contact = `If is there anything wrong, please contact us 
            by phone number: 123123123 or email: abc@gmail.com`;

        return (
            <div className=" col-9 col-md-7 col-lg-5 col-xl-3 mx-3 mb-5">
            <div className="card user-card">
                <div className="card-block">
                    <div className="user-image">
                        <img src={ `${API.API_CURRENT}/${subjectImage}` } className="img rounded-circle" alt="Subject"></img>
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">{ subjectName }</h6>
                    <p className="text-muted">Done | { scores >= 5 ? "Pass" : "Failed" }</p>
                    <hr></hr>
                    <p className="text-muted m-t-15">Date: { examDate } { examTime }</p>
                    <ul className="list-unstyled activity-leval">
                        { statusBar ? statusBar.map(item => item) : null}
                    </ul>
                    <div className="bg-c-green counter-block m-t-10 p-20 rounded">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <i className="far fa-check-circle fa-lg"></i>
                                <p>{ rightAns }</p>
                            </div>
                            <div className="col-4">
                                <i className="far fa-times-circle fa-lg"></i>
                                <p>{ wrongAns }</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-percent fa-sm"></i>
                                <p>{ scores * 10 }%</p>
                            </div>
                        </div>
                    </div>
                    <p className="m-t-15 text-muted">Class: { className }</p>
                    <hr></hr>
                    <div className="row justify-content-center user-social-link">
                        { contact }
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CardExam;