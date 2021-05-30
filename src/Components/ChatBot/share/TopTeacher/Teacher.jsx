import axios from 'axios';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './TeacherCss.css';
class Teacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            teachers: [],
            previousValue: null,
            searchNotFound: false,
            toRen: ""
        }
    }
    
    componentDidMount() {
        const { isGetTop, previousStep } = this.props;

        let URL = isGetTop ? 
                this.setURL("/chatbot/top/teacher")
            : previousStep.value ?
                this.setURL(`/chatbot/teacher/search/${previousStep.value}`) 
            : this.setURL("/auth/teacher");
        
        previousStep.value ? this.setState({previousValue: previousStep.value}) : this.setState({previousValue: null});
        
        axios.get(URL)
            .then(
                res => {
                    console.log(res.data.data);
                    this.setState({teachers: res.data.data})
                }
            )
            .catch(
                () => this.setState({notfound: true})
            )
        
        setTimeout(() => {
            this.renderTeachers();
        }, 2000);
    }

    setURL(link) {
        return `https://quanlikhoahoc.herokuapp.com/api/v1${link}`
    }

    renderTeachers () {
        const { teachers, previousValue } = this.state;
        console.log(this.state);
        let toRen = ""
        if(!!teachers[0]) {
            toRen = teachers.map((item) =>
                <div
                    className="col-12 text-center d-flex align-items-stretch flex-wrap mb-2"
                    key={item.id}>
                    <Link to={`/teacher/${item.id_teacher}/profile`} className="services-2">
                        <div className="icon">
                            <img alt="teacher" className="img-teacher" src={`https://quanlikhoahoc.herokuapp.com${item.image}`}></img>
                            </div>
                        <div className="text d-flex flex-column-reverse justify-content-between align-items-center">
                            <h2>{`${item.name}`}</h2>
                        </div>
                    </Link>
                </div>
            );
        } else if (!!previousValue) {
            toRen = <p>There is no teacher name: {previousValue}, please try again</p>
        } else {
            toRen = <p>Sorry, there is no teacher now, please come later</p>
        }

        this.setState({toRen})   
    }
    
    render() {
        const { toRen, notfound} = this.state
        return (
            <div className="row">

                {notfound ? <p>Sorry, the server is busy now, please come back later</p> : toRen ? toRen : <p>Loading...</p>}

            </div>
        );
    }
}

export default Teacher;