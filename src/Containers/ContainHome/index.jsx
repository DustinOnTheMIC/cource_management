import React, { Component } from "react";
import Center from "../../Components/HomeBodyComponents/BodyCenter/Center";
import IntroduceInfo from "../../Components/MainIntroduce";
import Bottom from "../../Components/HomeBodyComponents/BodyBottom";
import Classes from "../../Components/AllClassBodyComponents/Classes/index";
import axios from "axios";
import * as API from "../../env";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTopClass: "",
    };
  }

  handleLoading = (status) => {
    this.setState({ isLoading: status });
  };

  componentDidMount() {
    this.handleLoading(true);
    axios
      .get(`${API.API_TOP_CLASS}`)
      .then((res) => {
        if (res.data) {
          this.handleLoading(false);
          this.setState({
            dataTopClass: res.data.data,
          });
        }
      })
      .catch((err) => console.log(err), this.handleLoading(false));
  }

  render() {
    let { dataTopClass } = this.state;
    return (
      <div>
        <Center />
        <IntroduceInfo />
        <Bottom />
        <section className="ftco-section bg-light ftco-no-pt">
          <div className="container-xl">
            <div className="row justify-content-center mb-5">
              <div
                className="col-md-7 heading-section text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="subheading">Our Popular Class</span>
                <h2>ALL WHAT YOU NEED IS CHOOSE</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {this.itemTopClass(dataTopClass)}
            </div>
          </div>
        </section>
      </div>
    );
  }

  itemTopClass = (data) => {
    let result = null;
    if (data) {
      result = data.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12" key={index}>
            <Classes
              nameClass={item.name}
              teacherName={item.teacher.name}
              id_teacher={item.teacher.id_teacher}
              teacherPic={item.teacher.image}
              priceClass={item.price}
              descriptionClass={item.description}
              classPic={item.subject.image}
              id_class={item.id}
              handleLoading={this.handleLoading}
              current_user={item.current_user ? item.current_user : 0}
              limit={item.limit}
            />
          </div>
        );
      });
    }
    return result;
  };
}

export default index;
