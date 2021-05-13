import axios from "axios";
import React, { Component } from "react";

import * as API from "../../../env";
import ItemSubject from "./ItemSubject";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSubject: "",
    };
  }
  componentDidMount() {
    axios
      .get(API.API_SUBJECT)
      .then((res) => {
        this.setState({
          dataSubject: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { dataSubject } = this.state;
    return (
      <section className="ftco-section">
        <div className="container-xl" id="showsubject">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              {/**/}
              <span className="subheading">Class</span>
              <h2 className="mb-4">Browse Our Online Subject</h2>
            </div>
          </div>

          <div className="row g-lg-2 justify-content-center">
            {this.dataSubject(dataSubject)}
          </div>
        </div>
      </section>
    );
  }

  dataSubject = (dataSubject) => {
    let result = null;
    if (dataSubject) {
      result = dataSubject.map((item, index) => {
        return (
          <ItemSubject
            key={index}
            idSubject={item.id}
            imgSubject={item.image}
            nameSubject={item.name}
          />
        );
      });
    }

    return result;
  };
}

export default index;
