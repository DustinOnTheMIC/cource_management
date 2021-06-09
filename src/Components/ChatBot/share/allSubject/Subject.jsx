import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'


class Subject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            subjects: [],
            previousValue: "",
            toRen: ''
        }
    }
    
    componentDidMount() {
        const { isGetTop, previousStep } = this.props;
        console.log(this.props);
        let URL = isGetTop ? 
                this.setURL("/chatbot/top/subject")
            : previousStep.value ?
                this.setURL(`/chatbot/subject/search/${previousStep.value}`) 
            : this.setURL("/auth/home");

        previousStep.value ? this.setState({previousValue: previousStep.value}) : this.setState({previousValue: null});

        axios.get(URL)
        .then(
            res => {
                this.setState({subjects: res.data.data}, () => this.renderSubjects())
            }
        )
        .catch(
            () => {
                this.setState({notfound: true})
            }
        )
    }

    setURL(link) {
        return `https://quanlikhoahoc.herokuapp.com/api/v1${link}`
    }

    renderSubjects () {
        const { subjects, previousValue } = this.state;
        console.log(this.state);
        let toRen = ""
        if(!!subjects[0]) {
            toRen = subjects.map((item) =>
                <div
                    className="col-6 text-center d-flex align-items-stretch flex-wrap mb-2"
                    key={item.id}>
                    <Link to={`/subject/${item.id}/class`} className="services-2">
                        <div className="icon">
                            <i className={`${item.image} fa-2x`}></i>
                            </div>
                        <div className="text d-flex flex-column-reverse justify-content-between align-items-center">
                            <h2>{`${item.name}`}</h2>
                        </div>
                    </Link>
                </div>
            );
        } else if (!!previousValue) {
            toRen = <p>There is no subject name: {previousValue}, please try again</p>
        } else {
            toRen = <p>Sorry, there is no subject now, please come later</p>
        }

        this.setState({toRen})   
    }
    
    render() {
        const { notfound, toRen } = this.state
        return (
            <div className="row">


                {notfound ? <p>Sorry, the server is busy now, please come back later</p> : toRen ? toRen :  <p>Loading...</p>} 
            </div>
        );
    }
}

export default Subject;