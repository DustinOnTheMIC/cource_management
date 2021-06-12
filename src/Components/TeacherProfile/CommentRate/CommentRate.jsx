import React, { Component } from "react";
import ItemComment from "../ItemComment/ItemComment";
import "./CommentRate.css";
import CommentBox from "../CommentBox/CommentBox.jsx";
import axios from "axios";
import * as USER from "../../../constant";
import * as API from "../../../env";

class CommentRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCmt: "",
      loading: true,
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
          dataCmt: res.data.data,
          loading: false,
        });
      })
  }

  render() {
    let { dataCmt } = this.state;
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="row mb-5 justify-content-center ">
            <div className="col-md-8 col-12">
              <div className="form-row d-flex align-items-center justify-content-center">
                <CommentBox id_teacher={this.props.id_teacher} />
              </div>
              <div
                className={dataCmt.length > 0 ? "show-comment" : ""}
                id="scroll"
              >
                {this.itemComment(dataCmt)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  itemComment = (data) => {
    let result = null;
    if (data.length > 0) {
      result = data.map((item, index) => {
        return (
          <ItemComment
            key={index}
            name={item.user.name}
            content={item.content}
            rate={item.rate}
          />
        );
      });
    } else {
      result = (
        <p>
          <i> Let's enter first comment for this teacher</i>
        </p>
      );
    }
    return result;
  };
}

export default CommentRate;
