import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'


class Subject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            subjects: [],
            previousValue: null
        }
    }
    
    componentDidMount() {
        const { isGetTop, previousStep } = this.props;

        let URL = isGetTop ? 
                this.setURL("/subject/chatbot/popular")
            : previousStep.value ?
                this.setURL(`/chatbot/subject/search/${previousStep.value}`) 
            : this.setURL("/auth/home");

        previousStep.value ? this.setState({previousValue: previousStep.value}) : this.setState({previousValue: null});

        axios.get(URL)
            .then(
                res => {
                    console.log(res);
                    this.setState({subjects: res.data.data})
                }
            )
            .catch(
                err => {
                    this.setState({notfound: true})
                }
            )
    }

    setURL(link) {
        return `https://quanlikhoahoc.herokuapp.com/api/v1${link}`
    }
    
    render() {
        const { notfound, subjects, previousValue } = this.state
        return (
            <div className="row">

                {notfound ? <p>Sorry, the server is busy now, please come back later</p> : null}

                {
                    subjects ? subjects.map((item) =>
                        <div
                            className="col-12 text-center d-flex align-items-stretch flex-wrap mb-2"
                            key={item.id}>
                            <Link to={`/subject/${item.id}/class`} className="services-2">
                                <div className="text d-flex flex-column-reverse justify-content-between align-items-center">
                                    <h2>{`${item.name}`}</h2>
                                </div>
                            </Link>
                    </div>
                    ) : previousValue ? <p>There is no subject name: {previousValue}, please try again</p> 
                    : <p>Sorry, there is no subject now, please come later</p>
                }
            </div>
        );
    }
}

export default Subject;