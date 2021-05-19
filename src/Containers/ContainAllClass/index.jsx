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
    const response = res.data.data;

    if(response && response[0]) {
      if(level) {
        this.setState({
          pageTitle: `Classes level ${level}`,
          textDescriptionSubject: `Those classes are being suggested by the chat bot, 
                                  here is some classes level ${level} that available.`,
          isLoading: false,
          infoClass: response,
        });
      } else {
        this.setState({
          isLoading: false,
          infoClass: response,
          pageTitle: response[0].subject.name,
          textDescriptionSubject: response[0].subject.description
        });
      }
    } else {
      this.setState({
        pageTitle: `Classes level ${level}`,
        textDescriptionSubject: `Sorry, from now, we don't have any class level ${level}`
      })
    }
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
          console.log(res);
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
      .get(API.API_CURRENT + `api/v1/classes/chatbot/all/${level}`)
      .then((res) => {
        console.log(res);
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
              nameClass={item.name} //item.name
              teacherName={item.teacher.name}
              id_teacher={item.teacher.id_teacher}
              teacherPic={item.teacher.image}
              priceClass={item.price}
              descriptionClass={item.description}
              classPic={item.subject.image}
              id_class={item.id}
              handleLoading={this.handleLoading}
              teacher_rate={item.teacher.rate}
            />
          </div>
        );
      });
    }
    return result;
  };
}

export default index;
