import React, { Component } from 'react';
import './CardExamCss.css'
class CardExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusBar: [],
            percent: 10
        }
    }

    componentDidMount() {
        this.checkPercent();
    }

    checkPercent() {
        const { percent } = this.state;
        console.log({percent});

        if(percent >= 100) {
            return this.setStatusBar(5);
        }
        
        if(percent >= 80) {
            return this.setStatusBar(4);
        }
        
        if(percent >= 60) {
            return this.setStatusBar(3);
        }
        
        if(percent >= 40) {
            return this.setStatusBar(2);
        }

        if(percent >= 20) {
            return this.setStatusBar(1);
        }

        return this.setStatusBar(0);
    }

    setStatusBar(number) {
        let statusBar = [];
        
        if(number < 1) {
            for(let i = 1; i <= 5; i++) {
                statusBar.push(<li></li>);
            }

        } else {
            
            for(let i = 1; i <= number; i++) {
                statusBar.push(<li className="active"></li>);
            }

            if(number < 5) {
                let temp = 5 - number;
                for(let i = 1; i <= temp; i ++) {
                    statusBar.push(<li></li>)
                }
            }
        }
        console.log({number});
        this.setState({ statusBar })
    }
    

    render() {
        const { statusBar } = this.state;
        const {img, subject, isPassed, date, rightAns, wrongAns, className} = this.props;
        const contact = `If is there anything wrong, please contact us 
            by phone number: 123123123 or email: abc@gmail.com`;

        return (
            <div className=" col-9 col-md-7 col-lg-5 col-xl-3 mx-3 mb-5">
            <div className="card user-card">
                <div className="card-block">
                    <div className="user-image">
                        <img src={this.props.img} className="img rounded-circle" alt="Subject"></img>
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">{this.props.subject}</h6>
                    <p className="text-muted">Done | Passed</p>
                    <hr></hr>
                    <p className="text-muted m-t-15">Date: 30/2/2021</p>
                    <ul className="list-unstyled activity-leval">
                        {statusBar.map(item => item)}
                    </ul>
                    <div className="bg-c-green counter-block m-t-10 p-20 rounded">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <i className="fa fa-check-circle-o fa-lg"></i>
                                <p>4</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-times-circle-o fa-lg"></i>
                                <p>4</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-percent fa-sm"></i>
                                <p>50%</p>
                            </div>
                        </div>
                    </div>
                    <p className="m-t-15 text-muted">Class: asdasdasdasd</p>
                    <hr></hr>
                    <div className="row justify-content-center user-social-link">
                        {contact}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CardExam;