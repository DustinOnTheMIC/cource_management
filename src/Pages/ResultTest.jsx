import axios from "axios";
import React, { Component } from "react";
import Footer from "../Components/footer_exam/Footer";
import Header from "../Components/header_exam/Header";
import Loading from "../Components/Loading/Loading";
import * as API from '../env'
import '../index_exam.css';


class ResultTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores : '',
      right_ans : '',
      wrong_ans : '',
      date_begin : '',
      loading: true,
    };
  }
  componentDidMount() {
    let { idTest } = this.props.match.params;
    let token = localStorage.getItem("token");
    axios.get(`${API.API_DONE_EXAM}`, {
      headers: {
        'Authorization': "Bearer "+ token
      }
    }).then((res) => {
      if(res.data){
        let index;
        index = res.data.data.findIndex((x) => x.exams.id === parseInt(idTest));
        if(index !== -1){
          this.setState({
            loading : false,
            scores : res.data.data[index].scores,
            right_ans : res.data.data[index].right_ans,
            wrong_ans : res.data.data[index].wrong_ans,
            date_begin : res.data.data[index].exams.date_begin,
          })
        }else{
          alert('Sorry, Done have any test!!!');
          this.props.history.push(`/`);
        }
      }
    })
  }

  render() {
    let { scores,right_ans,wrong_ans ,date_begin} = this.state;
    return (
      <div>
        <Header />
        <div>{this.state.loading ? <Loading /> : null}</div>
          <div id="result-test">
          <div className="container">
            <h2 className="title">Result Of Test</h2>
            <h3 className="sub-title">EXAM: {JSON.parse(localStorage.getItem('infoTest')) ? JSON.parse(localStorage.getItem('infoTest')).name : "name test"}</h3>
            <div className="result-detail">
              <div className="result-detail-item">
                <div className="title">Total score</div>
                <div className="description">
                  {scores} score
                </div>
              </div>
              <div className="result-detail-item">
                <div className="title">Number of correct sentences</div>
                <div className="description">{right_ans} sentences</div>
              </div>
              <div className="result-detail-item">
                <div className="title">Number of incorrect sentences</div>
                <div className="description">{wrong_ans} sentences</div>
              </div>
              <div className="result-detail-item">
                <div className="title">Date Begin</div>
                <div className="description">{date_begin}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default(ResultTest);
