import React, { Component } from "react";
import axios from "axios";

import * as API from "../../env";
import Introduce from "../../Components/Common/Introduce/Introduce";
import Classes from "../../Components/AllClassBodyComponents/Classes";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoClass: "",
      pageTitle: "Classes",
      textDescriptionSubject: "",
    };
  }

  componentDidMount() {
    const { id_subject } = this.props;
    if (id_subject) {
      // get all class of subject 
      axios
        .get(API.API_CLASS + `/${id_subject}`)
        .then((res) => {
          this.setState({
            infoClass: res.data.data,
            pageTitle: res.data.data[0].subject.name,
            textDescriptionSubject: res.data.data[0].subject.description,
          });
        })
        .catch((err) => console.log(err));
    } else {
      // get all class of system
      axios
        .get(API.API_CLASS)
        .then((res) => {
          this.setState({
            infoClass: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    let { infoClass, pageTitle, textDescriptionSubject } = this.state;
    return (
      <div>
        <Introduce
          key={index}
          pageTitle={pageTitle}
          textDescriptionSubject={textDescriptionSubject}
        />
        <section className="ftco-section courses-section">
          <div className="container">
            <div className="row">{this.dataClass(infoClass)}</div>
          </div>
        </section>
      </div>
    );
  }
  dataClass = (dataClass) => {
    let result = null;
    if (dataClass) {
      result = dataClass.map((item, index) => {
        return (
          <div className="col-md-6 col-lg-4" key={index}>
            <Classes
              nameClass={item.name}
              teacherName={item.teacher.name}
              id_teacher={item.teacher.id_teacher}
              teacherPic={item.teacher.image}
              priceClass={item.price}
              descriptionClass={item.subject.description}
              classPic={item.subject.image}
              id_class={item.id}
            />
          </div>
        );
      });
    }
    return result;
  };
}

export default index;
