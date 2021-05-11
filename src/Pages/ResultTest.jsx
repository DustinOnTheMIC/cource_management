import React, { Component } from "react";
import Footer from "../Components/footer_exam/Footer";
import Header from "../Components/header_exam/Header";
import Loading from '../Components/Loading/Loading'
import '../index_exam.css';


class ResultTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataResult: "",
      loading: true,
    };
  }
  componentDidMount() {
    let resultTest = JSON.parse(localStorage.getItem("resultTest"));
    if (resultTest) {
      this.setState({
        dataResult: resultTest,
        loading : false
      });
    }
  }

  render() {
    let { dataResult } = this.state;
    return (
      <div>
        <Header />
        {dataResult.length === 0 ? (
          <div>{this.state.loading ? <Loading /> : null}</div>
        ) : (
          <div id="result-test">
          <div className="container">
            <h2 className="title">Result Of Test</h2>
            <h3 className="sub-title">EXAM: {JSON.parse(localStorage.getItem('infoTest')) ? JSON.parse(localStorage.getItem('infoTest')).name : "name test"}</h3>
            <div className="result-detail">
              <div className="result-detail-item">
                <div className="title">Total score</div>
                <div className="description">
                  {dataResult["result_test "]} score
                </div>
              </div>
              <div className="result-detail-item">
                <div className="title">Number of correct sentences</div>
                <div className="description">{dataResult.ans_pass} sentences</div>
              </div>
              <div className="result-detail-item">
                <div className="title">Number of incorrect sentences</div>
                <div className="description">{dataResult.ans_fail} sentences</div>
              </div>
              <div className="result-detail-item">
                <div className="title">Date Exam</div>
                <div className="description">{JSON.parse(localStorage.getItem('infoTest')) ? JSON.parse(localStorage.getItem('infoTest')).date : new Date().getDate()} </div>
              </div>
            </div>
          </div>
        </div>
        )}
        
        <Footer />
      </div>
    );
  }
}

export default(ResultTest);
