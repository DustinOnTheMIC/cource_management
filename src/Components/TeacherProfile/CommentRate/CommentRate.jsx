import React, { Component } from "react";
import ItemComment from "../ItemComment/ItemComment";
import "./CommentRate.css";
import CommentBox from "../CommentBox/CommentBox.jsx";
import axios from "axios";
import * as USER from "../../../constant";
import *  as API from '../../../env'

class CommentRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRatable: true, //user có đủ khả năng để rating không, cái này sau này chuyển thành props
      dataCmt : ''
    };
  }

  componentDidMount() {
    axios
      .get(`${API.API_CMT_OF_TEACHER}/${this.props.id_teacher}`, {
        headers: {
          Authorization: `Bearer ${USER.TOKEN()}`,
        },
      })
      .then((res) => {
        this.setState({
          dataCmt : res.data.data
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="row mb-5 justify-content-center ">
            <div className="col-md-8 col-12">
              <div className="form-row d-flex align-items-center justify-content-center">
                {this.state.isRatable ? (
                  <CommentBox id_teacher={this.props.id_teacher} />
                ) : (
                  <p>What students said will help you make a right choice</p>
                )}
              </div>
              <div className="show-comment" id="scroll">
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
