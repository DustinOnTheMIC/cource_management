import React, { Component } from "react";

import Classes from "../../Components/AllClassBodyComponents/Classes";
import InforTea from "../../Components/TeacherProfile/InforTea";
import "../../Components/Common/custom.css";
import CommentRate from "../../Components/TeacherProfile/CommentRate";

class ShowInForTea extends Component {
  render() {
    return (
      <div>
        <InforTea />
        <div className="container">
          <h1 className="title text-center">The class is teaching</h1>
          <div className="row mb-5 justify-content-center">
              <div className="col-12 col-md-4">
                <Classes />
              </div>
              <div className="col-12 col-md-4">
                <Classes />
              </div>
              <div className="col-12 col-md-4">
                <Classes />
              </div>
          </div>
        </div>
        <CommentRate />
      </div>
    );
  }
}

export default ShowInForTea;
