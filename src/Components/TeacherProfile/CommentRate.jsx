import React, { Component } from "react";
import ItemComment from "./ItemComment";

class CommentRate extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 col-12 pr-5">
            <h1 className="title text-center">Comment <br/> & <br/> Ratting</h1>
          </div>
          <div className="col-md-8 col-12">
            <div className="show-comment">
              <ItemComment />
              <ItemComment />
              <ItemComment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentRate;
