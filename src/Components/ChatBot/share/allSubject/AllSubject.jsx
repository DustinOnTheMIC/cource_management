import React, { Component } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import ItemSubject from '../../../HomeBodyComponents/BodyBottom/ItemSubject'
import { Link } from "react-router-dom";

import axios from 'axios'


class AllSubject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            result: '',
            trigger: false,
            subjects: []
        }
    }

    componentDidMount() {
        axios.get('https://quanlikhoahoc.herokuapp.com/api/v1/auth/home')
            .then(
                res => {
                    this.setState({subjects: res.data.data})
                    console.log(this.state);
                }
            )
            .catch(
                err => {
                    this.setState({notfound: true})
                }
            )
    }
    
    render() {
        const { notfound, subjects } = this.state
        return (
            <div className="row">
                {notfound ? <p>Sorry, the server is busy now, please come back later</p> : null}
                {subjects ? subjects.map((item) => 
                    <div
                        className="col-md-6 text-center d-flex align-items-stretch flex-wrap mb-2"
                        key={item.id}>
                        <Link to={`/subject/${item.id}/class`} className="services-2">
                            <div className="icon">
                                <span className={`${item.image}`}></span>
                            </div>
                            <div className="text d-flex flex-column-reverse justify-content-between align-items-center">
                                <h2>{`${item.name}`}</h2>
                            </div>
                        </Link>
                  </div>
                ) : null}
            </div>
        );
    }
}

export default AllSubject;