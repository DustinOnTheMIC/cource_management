import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "../../Components/Common/custom.css";

import Classes from "../../Components/AllClassBodyComponents/Classes";
import InforTeacher from "../../Components/TeacherProfile/InforTeacher";
import "../../Components/Common/custom.css";
import CommentRate from "../../Components/TeacherProfile/CommentRate";

class ShowInForTea extends Component {
  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    return (
      <div>
        <InforTeacher />
        <div className="container">
          <h1 className="title text-center">The class is teaching</h1>
          <div className="row mb-5 ">
            <Carousel breakPoints={breakPoints}>
                <Classes />
                <Classes />
                <Classes />
                <Classes />
            </Carousel>
          </div>
        </div>
        <CommentRate />
      </div>
    );
  }
}

export default ShowInForTea;
