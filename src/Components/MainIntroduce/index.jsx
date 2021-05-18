import axios from "axios";
import React, { Component } from "react";
import * as API from "../../env";
import bg3 from "../../Assets/images/bg_3.jpg";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStatistic: "",
    };
    this.arrImg = [
      { img: "flaticon-scientist" },
      { img: "flaticon-certificate" },
      { img: "flaticon-calendar" },
      { img: "flaticon-graduation" },
      { img: "flaticon-online-learning" },
    ];
  }
  componentDidMount() {
    // GET DATA STATISTIC DEFAULT
    axios
      .get(`${API.API_STATICTIS}`)
      .then((res) => {
        this.setState({
          dataStatistic: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let { dataStatistic } = this.state;
    return (
      <section
        className="ftco-section-counter img"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row section-counter justify-content-center">
            {this.itemStatistic(dataStatistic, this.arrImg)}
          </div>
        </div>
      </section>
    );
  }

  itemStatistic = (content, img) => {
    let result = null;
    if (content) {
      result = Object.entries(content).map((item,index) => {
        return (
          <div className="col-md-3 col-xl-2 d-flex align-items-stretch" key={index}>
            <div
              className="counter-wrap-2 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="icon">
                <span className={`${img[index].img}`}></span>
              </div>
              <div className="text">
                <h2 className="number">
                  <span className="countup"> {item[1]} </span>
                </h2>
                <span className="caption">{item[0]}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };
}

export default index;
