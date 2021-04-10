import React, { Component } from "react";
import ItemComment from "../ItemComment/ItemComment";
import './CommentRate.css'
import CommentBox from '../CommentBox/CommentBox.jsx'

class CommentRate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRatable: true, //user có đủ khả năng để rating không, cái này sau này chuyển thành props
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="row mb-5 justify-content-center ">
            <div className="col-md-8 col-12">
              <div className="form-row d-flex align-items-center justify-content-center">
                {this.state.isRatable ? <CommentBox/> : <p>What students said will help you make a right choice</p>}
              </div>
              <div className="show-comment" id='scroll'>
                <ItemComment />
                <ItemComment />
                <ItemComment />
                <ItemComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentRate;
