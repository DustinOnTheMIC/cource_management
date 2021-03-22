import React, { Component } from "react";
import ItemComment from "../ItemComment/ItemComment";
import './CommentRate.css'
import CommentBox from '../CommentBox/CommentBox'

class CommentRate extends Component {


  render() {
    return (
      <div className="container">
        <div className="row mb-5 justify-content-center ">
          <div className="col-md-8 col-12">
            <div class="form-row d-flex align-items-center justify-content-center">
              <CommentBox/>
            </div>
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
