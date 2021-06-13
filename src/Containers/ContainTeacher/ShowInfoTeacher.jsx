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
      isLoading: true,
    };
  }
  componentDidMount() {
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
      })
      .catch((err) => console.log(err));
  }

  handleLoading = (status) => {
    this.setState({isLoading: status}, ()=> console.log(this.state));
  }
 
  render() {
    const breakPoints = [
      { width: 550, itemsToShow: 1},
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 3},
    ];

    let { dataTeacher, dataClass, isLoading } = this.state;

    return (
      <div className="">

        { isLoading ? <Loading/> : null }

        {
          dataTeacher ? 
            dataTeacher.map( (item, index) => 
              <InfoTeacher
                key={index}
                name={item.name}
                description={item.description}
                img={item.image}
                address={item.address}
                phone={item.phone}
                email={item.email}
                rating={item.rate}

              />
            ) 
          :
          null
        }

        <div className="container">
          <h1 className="title text-center">Teaching classes</h1>
          <div className="row mb-5 ">
            {dataClass.length === 0 ? (
              <div>
                <p>Oopp! There aren't any classes</p>
              </div>
            ) : (
              <Carousel breakPoints={breakPoints} >
                {this.dataClass(dataClass)}
              </Carousel>
            )}
          </div>
        </div>
        <CommentRate id_teacher={this.props.id_teacher} />
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
            nameClass={item.name}
            teacherName={item.teacher.name}
            teacherPic={item.teacher.image}
            priceClass={item.price}
            descriptionClass={item.description}
            classPic={item.subject.image}
            id_class={item.id}
            id_teacher={item.teacher.id_teacher}
            current_user={item.current_user ? item.current_user : 0}
            limit={item.limit}
            handleLoading = {status => this.handleLoading(status)}
            isCarousel={true}
            changeBg={true}
            current_user={item.curent_user ? item.curent_user : 0}
          />
        );
      });
    }
    return result;
  };
}

export default ShowInfoTeacher;
