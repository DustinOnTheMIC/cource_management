import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer_exam/Footer";
import Header from "../Components/header_exam/Header";
import Loading from '../Components/Loading/Loading'
import * as API from "../env";
import '../index_exam.css';

class TestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataExam: "",
      loading: true,
    };
  }

  componentDidMount() {
    let idExam = "2";
    let token = localStorage.getItem("token");
    console.log(token);
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
          timeBegin : res.data.data.id_exams.time_begin,
          duration : res.data.data.duration,
        };
        localStorage.setItem("infoTest", JSON.stringify(infoExam));
      })
      .catch((err) => console.log(err));
  }

  render() {
    let { dataExam } = this.state;
    return (
      <div>
        <Header />
        {dataExam.length === 0 ? (
          <div>{this.state.loading ? <Loading /> : null}</div>
        ) : (
          <section className="exam-detail">
            <div className="container">
              <h3 className="title"> {dataExam.name}</h3>
              <p className="description">
                {/* {dataExam.description} */}
                JavaScript là một ngôn ngữ lập trình hoặc ngôn ngữ kịch bản cho
                phép triển khai những chức năng phức tạp trên trang web như hiển
                thị các cập nhật nội dung kịp thời, tương tác với bản đồ, hoạt
                cảnh 2D/3D vv...
                JavaScript là một ngôn ngữ lập trình hoặc ngôn ngữ kịch bản cho
                phép triển khai những chức năng phức tạp trên trang web như hiển
                thị các cập nhật nội dung kịp thời, tương tác với bản đồ, hoạt
                cảnh 2D/3D vv...
              </p>
              <div className="exam-detail-panel">
                <div className="exam-detail-item">
                  <div className="title">
                    <i className="far fa-file-alt"></i>Number of question
                  </div>
                  <div className="description">
                    {dataExam.number_of_question} questions
                  </div>
                </div>
                <div className="exam-detail-item">
                  <div className="title">
                    <i className="far fa-file-alt"></i>Duration
                  </div>
                  <div className="description">{dataExam.duration} minutes</div>
                </div>
              </div>
              <div className="test-now">
                <Link to={`/do_test/${dataExam.id}/to_do`}>
                  <i className="fas fa-play"></i>Do Test
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
