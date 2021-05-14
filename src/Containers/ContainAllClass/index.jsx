import React, { Component } from "react";
import axios from "axios";
import * as API from "../../env";
import Introduce from "../../Components/Common/Introduce/Introduce";
import Classes from "../../Components/AllClassBodyComponents/Classes";
import Loading from "../../Components/Loading/Loading"
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoClass: "",
      pageTitle: "Classes",
      textDescriptionSubject: "",
    };
  }

  handleLoading = (status) => {
    this.setState({ isLoading: status})
  }

  setInfoClass(res) {
    const { level } = this.props    

    level ? this.state({
        pageTitle: `Classes level ${level}`,
        textDescriptionSubject: `Those classes are being suggested by the chat bot, 
                                here is some classes level ${level} that available.`
      })
    : 
      this.setState({
        isLoading: false,
        infoClass: res.data.data,
        pageTitle: res.data.data[0].subject.name,
        textDescriptionSubject: res.data.data[0].subject.description,
      });

  }

  componentDidMount() {
    const { id_subject, level } = this.props;
    this.handleLoading(true) //mount loading component

    console.log(this.props.match);
    
    if (id_subject) {
      // get all class of subject 
        axios
        .get(API.API_CLASS + `/${id_subject}`)
        .then((res) => {
          this.handleLoading(false)
          this.setInfoClass(res)
        })
        .catch((err) => {
          this.handleLoading(false) //un mount loading component
          console.log(err)
        });
    } else if(!level) {
      // get all class of system
        axios
        .get(API.API_CLASS)
        .then((res) => {
          this.handleLoading(false)
          this.setState({
            isLoading: false,
            infoClass: res.data.data,
          });
        })
        .catch((err) => {
          this.handleLoading(false) //un mount loading component
          console.log(err)
        });
      } else {
      axios
      .get(API.API_CURRENT + `api/v1/class/chatbot/all/${level}`)
      .then((res) => {
        this.handleLoading(false)
        this.setInfoClass(res)

      })
      .catch((err) => {
        this.handleLoading(false) //un mount loading component
        console.log(err)
      });
    }
  }

  render() {
    let { infoClass, pageTitle, textDescriptionSubject } = this.state;
    return (
      <div>


        {this.state.isLoading ? <Loading/> : null}
        {/* Loading component */}


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
              nameClass={'HTML, CSS, and Javascript for Web Developers'} //item.name
              teacherName={item.teacher.name}
              id_teacher={item.teacher.id_teacher}
              teacherPic={item.teacher.image}
              priceClass={item.price}
              descriptionClass={item.subject.description}
              classPic={item.subject.image}
              id_class={item.id}
              handleLoading={this.handleLoading}
            />
          </div>
        );
      });
    }
    return result;
  };
}

export default index;
