import axios from "axios";
import React, { Component } from "react";
import Header from "../Components/header_exam/Header";
import Loading from "../Components/Loading/Loading";
import "../index_exam.css";
import * as API from "../env";
import Footer from "../Components/footer_exam/Footer";

class DoTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      dataTest: [],
      loading: true,
      min: "",
      sec: "",
    };
    this.secondsRemaining = 0;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // t_end = t_begin + drution
    // t_sub = t_end - t_now
    // t_sub <= ===>> submit
    let { idTest } = this.props.match.params;
    let infoTest = JSON.parse(localStorage.getItem("infoTest"));
    if (idTest && infoTest) {
      let t_begin = infoTest.timeBegin; //SET TIME BEGIN TEMP
      let checkTime = parseInt(t_begin.split(":")[1]) + infoTest.duration;
      let date = new Date();
      if (Math.ceil(checkTime / 60) > 0) {
        let t_end = `${parseInt(t_begin.split(":")[0]) +
          Math.floor(checkTime / 60)} :${checkTime % 60}`;
        let t_sub =
          (parseInt(t_end.split(":")[0]) - date.getHours()) * 60 +
          (parseInt(t_end.split(":")[1]) - date.getMinutes());
        this.secondsRemaining = t_sub * 60;
      }
      let token = localStorage.getItem("token");
      // CHECK DONE TEST BEFORE RENDER QUESTION TEST
      axios
        .get(`${API.API_CHECK_DO_TEST}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.data) {
            let index;
            index = res.data.data.findIndex((x) => x.id === parseInt(idTest));
            if (index === -1) {
              this.setState({
                loading: false,
              });
              this.props.history.push(`/${idTest}/result_test`);
            } else {
              axios
                .get(`${API.API_TEST_DETAIL}/${idTest}`, {
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                })
                .then((res) => {
                  this.setState({
                    dataTest: res.data.data,
                    loading: false,
                  });
                })
            }
          }
        });
      this.tc = setInterval(() => this.currentTime(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.tc);
  }

  currentTime() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      min: min,
      sec: sec,
    });

    if (sec < 10) {
      this.setState({
        sec: "0" + sec,
      });
    }

    if (min < 10) {
      this.setState({
        min: "0" + min,
      });
    }

    this.secondsRemaining--;
    if (this.secondsRemaining === 0) {
      this.handleSubmitResult();
    }
  }

  handleChange(e) {
    const id = e.target.name;
    const answer = { id, answer: e.target.value };
    let answers;
    if (this.state.answers.some((item) => item.id === id)) {
      answers = [
        ...this.state.answers.filter((item) => item.id !== id),
        answer,
      ];
    } else {
      answers = [...this.state.answers, answer];
    }
    this.setState({ answers });
    let idInput = e.target.id;
    this.isChecked(`${idInput}-label`);
  }

  isChecked = (id) => {
    let elid = document.getElementById(`${id}`);
    var row = elid.closest(".answer-sheet-row");
    let arr = row.getElementsByClassName("answer");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("checked");
    }
    elid.classList.add("checked");
  };

  handleSubmitResult() {
    let { idTest } = this.props.match.params;
    let answerClear = [];
    this.setState({
      loading: true,
    });
    this.state.answers.forEach((item) => {
      answerClear.push(
        [item].reduce((acc, cur) => ({ ...acc, [cur.id]: cur.answer }), {})
      );
    });
    // CHECK DONE TEST BEFORE SUBMIT ANSWER
    let token = localStorage.getItem("token");
    axios
      .get(`${API.API_CHECK_DO_TEST}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data) {
          let index;
          index = res.data.data.findIndex((x) => x.id === parseInt(idTest));
          if (index === -1) {
            this.setState({
              loading: false,
            });
            this.props.history.push(`/${idTest}/result_test`);
          } else {
            axios
              .post(`${API.API_CHECK_TEST}/${idTest}`, answerClear, {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
              })
              .then(() => {
                this.setState({
                  loading: false,
                });
                this.props.history.push(`/${idTest}/result_test`);
              });
          }
        }
      });
  }

  render() {
    let { dataTest, min, sec } = this.state;
    return (
      <div>
        <Header />
        <div>{this.state.loading ? <Loading /> : null}</div>
        <div id="in-test">
          <div className="container content">
            <div className="question-sheet">
              <div className="title-sheet-answer">
                EXAM: {JSON.parse(localStorage.getItem("infoTest")).name}{" "}
              </div>
              <form action="" method="POST" name="answer-form" id="answer-form">
                <div className="show-question">
                  {this.showQuestion(dataTest)}
                </div>
                <div className="number-order">
                  <button
                    id="btn-submit"
                    onClick={() => this.handleSubmitResult()}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="answer-sheet">
              <div className="answer-sheet-inner">
                <div className="header-sheet">
                  {dataTest.length > 0 ? (
                    <div className="time" id="timeCount">
                      {/* {min} : {sec} */}
                      TIME: {min >= 0 ? `${min} : ${sec}` : "00 : 00"}
                    </div>
                  ) : (
                    ""
                  )}
                  <h4 className="title-sheet-answer" style={{ color: "#fff" }}>
                    List answer
                  </h4>
                </div>
                <div className="content">{this.showChooseAnswer(dataTest)}</div>
                <div className="footer-sheet">
                  <button
                    id="btn-submit"
                    onClick={() => this.handleSubmitResult()}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  showQuestion(dataTest) {
    let result = null;
    if (dataTest) {
      result = dataTest.map((item, index) => {
        return (
          <div className="question-item" key={index}>
            <p>
              <span>Câu {index + 1}</span> {item.question}
            </p>
            <div className="answer-row">
              <input
                type="radio"
                name={item.id_question}
                id={`${item.id_question}-1`}
                onChange={this.handleChange}
                value="A"
              />
              <label htmlFor={`${item.id_question}-1`}>{item.A}</label>
            </div>
            <div className="answer-row">
              <input
                type="radio"
                name={item.id_question}
                id={`${item.id_question}-2`}
                onChange={this.handleChange}
                value="B"
              />
              <label htmlFor={`${item.id_question}-2`}>{item.B}</label>
            </div>
            <div className="answer-row">
              <input
                type="radio"
                name={item.id_question}
                id={`${item.id_question}-3`}
                onChange={this.handleChange}
                value="C"
              />
              <label htmlFor={`${item.id_question}-3`}>{item.C}</label>
            </div>
            <div className="answer-row">
              <input
                type="radio"
                name={item.id_question}
                id={`${item.id_question}-4`}
                onChange={this.handleChange}
                value="D"
              />
              <label htmlFor={`${item.id_question}-4`}>{item.D}</label>
            </div>
          </div>
        );
      });
    }
    return result;
  }

  showChooseAnswer(dataTest) {
    let result = null;
    if (dataTest) {
      result = dataTest.map((item, index) => {
        return (
          <div className="answer-sheet-row" key={index}>
            <div className="number-order">{index + 1}</div>
            <label
              htmlFor={`${item.id_question}-1`}
              onClick={() => this.isChecked(`${item.id_question}-1-label`)}
              className={`answer ${item.id_question}`}
              id={`${item.id_question}-1-label`}
            >
              A
            </label>
            <label
              htmlFor={`${item.id_question}-2`}
              onClick={() => this.isChecked(`${item.id_question}-2-label`)}
              className={`answer ${item.id_question}`}
              id={`${item.id_question}-2-label`}
            >
              B
            </label>
            <label
              htmlFor={`${item.id_question}-3`}
              onClick={() => this.isChecked(`${item.id_question}-3-label`)}
              className={`answer ${item.id_question}`}
              id={`${item.id_question}-3-label`}
            >
              C
            </label>
            <label
              htmlFor={`${item.id_question}-4`}
              onClick={() => this.isChecked(`${item.id_question}-4-label`)}
              className={`answer ${item.id_question}`}
              id={`${item.id_question}-4-label`}
            >
              D
            </label>
          </div>
        );
      });
    }
    return result;
  }
}

export default DoTest;
