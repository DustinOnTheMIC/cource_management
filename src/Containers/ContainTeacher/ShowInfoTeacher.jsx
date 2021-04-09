import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import * as API from "../../env";

import "../../Components/Common/custom.css";
import Classes from "../../Components/AllClassBodyComponents/Classes";
import InfoTeacher from "../../Components/TeacherProfile/InfoTeacher";
import "../../Components/Common/custom.css";
import CommentRate from "../../Components/TeacherProfile/CommentRate/CommentRate";
import Loading from "../../Components/Loading/Loading";

class ShowInfoTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeacher: "",
      dataClass: "",
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    // GET DATA FOR TEACHER
    axios
      .get(API.API_TEACHER + `/${this.props.id_teacher}`)
      .then((res) => {
        this.setState({
          isLoading: false,
          dataTeacher: [res.data.data],
        });
      })
      .catch((err) => console.log(err));
    // GET DATA FOR CLASS OF TEACHER
    axios
      .get(API.API_CLASS_OF_TEACHER + `/${this.props.id_teacher}`)
      .then((res) => {
        this.setState({
          isLoading: false,
          dataClass: res.data.data,
        });
        console.log(this.state.dataClass);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const breakPoints = [
      { width: 550, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    let { dataTeacher, dataClass } = this.state;
    return (
      <div>
        {dataTeacher.length === 0 ? (
          <div>{this.state.isLoading ? <Loading /> : null}</div>
        ) : (
          dataTeacher.map((item, index) => (
            <InfoTeacher
              key={index}
              name={item.name}
              description={"Full Stack Developer"}
              img={item.image}
              address={item.address}
              phone={item.phone}
              email={item.email}
              rating={5}
            />
          ))
        )}
        <div className="container">
          <h1 className="title text-center">The class is teaching</h1>
          <div className="row mb-5 ">
            {dataTeacher.length === 0 ? (
              <div>
                <p>Data is loading</p>
              </div>
            ) : (
              <Carousel breakPoints={breakPoints}>
                {this.dataClass(dataClass)}
              </Carousel>
            )}
          </div>
        </div>
        <CommentRate />
      </div>
    );
  }
  dataClass = (dataClass) => {
    let result = null;
    if (dataClass) {
      result = dataClass.map((item, index) => {
        return (
            <Classes
              key={index}
              nameClass={'HTML, CSS, and Javascript for Web Developers'}
              teacherName={item.teacher.name}
              teacherPic={item.teacher.image}
              priceClass={item.price}
              descriptionClass={item.subject.description}
              classPic={item.subject.image}
              id_class={item.id}
              id_teacher={item.teacher.id_teacher}
            />
        );
      });
    }
    return result;
  };
}

export default ShowInfoTeacher;
