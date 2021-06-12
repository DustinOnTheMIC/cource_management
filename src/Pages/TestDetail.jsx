import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer_exam/Footer";
import Header from "../Components/header_exam/Header";
import Loading from "../Components/Loading/Loading";
import * as API from "../env";
import "../index_exam.css";

class TestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataExam: "",
      loading: true,
      isDo: true,
    };
  }

  componentDidMount() {
    let { idExam } = this.props.match.params;
    let token = localStorage.getItem("token");
    axios
      .get(`${API.API_EXAM_DETAIL}/${idExam}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({
          dataExam: res.data.data,
          loading: false,
        });
        let infoExam = {
          name: res.data.data.name,
          date: res.data.data.id_exams.date_begin,
          timeBegin: res.data.data.id_exams.time_begin,
          duration: res.data.data.duration,
        };
        // CHECK TIME CAN DO TEST
        // let time = new Date();
        // let h_exam = parseInt(infoExam.timeBegin.split(":")[0]);
        // let m_exam = parseInt(infoExam.timeBegin.split(":")[1]);
        // let d_exam = parseInt(infoExam.date.split("-")[2]);
        // let mon_exam = parseInt(infoExam.date.split("2")[1]);
        // if (
        //   time.getHours() < h_exam &&
        //   time.getMinutes() < m_exam &&
        //   time.getDate() !== d_exam &&
        //   time.getMonth() !== mon_exam ||
        //   (time.getMinutes() - m_exam) * -1 >=30 ||
        //   (time.getHours() - h_exam) !== 0
        // ) {
        //   this.setState({
        //     isDo: false,
        //   });
        // }
        localStorage.setItem("infoTest", JSON.stringify(infoExam));
      })
  }

  render() {
    let { dataExam, isDo } = this.state;
    return (
      <div>
        <Header />
        {dataExam.length === 0 ? (
          <div>{this.state.loading ? <Loading /> : null}</div>
        ) : (
          <section className="exam-detail">
            <div className="container">
              <h3 className="title"> {dataExam.name}</h3>
              <p className="description">{dataExam.description}</p>
              <div className="exam-detail-panel">
                <div className="exam-detail-item">
                  <div className="title">
                    <i className="fa fa-info-circle"></i>
                    <i> Number of question</i>
                  </div>
                  <div className="description">
                    {dataExam.number_of_question} questions
                  </div>
                </div>
                <div className="exam-detail-item">
                  <div className="title">
                    <i className="fa fa-info-circle"></i>
                    <i> Duration</i>
                  </div>
                  <div className="description">{dataExam.duration} minutes</div>
                </div>
              </div>
              <div className="test-now">
                <Link
                  to={`/do_test/${dataExam.id}/to_do`}
                  className={isDo ? "" : "disabled-link"}
                >
                  <i className="fa fa-play"></i>Do Test
                </Link>
              </div>
            </div>
          </section>
        )}
        <Footer />
      </div>
    );
  }
}

export default TestDetail;
