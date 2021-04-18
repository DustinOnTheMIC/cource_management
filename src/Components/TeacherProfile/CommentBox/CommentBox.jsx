import React, { Component } from "react";
import swal from "@sweetalert/with-react";
import "./Rating.css";
import axios from "axios";
import * as API from "../../../env";
import * as USER from "../../../constant";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher_cmt: "",
      teacher_rating: "",
      isCardRating: false,
      isCmt: false,
    };
  }

  componentDidMount() {
    // LINK CHECK ISCMT FAKE 
    // https://quanlikhoahoc.herokuapp.com/api/v1/rated/checkValidate/1
    // LINK CHECK ISCMT COMMON 
    // ${API.API_CHECK_SHOW_SUB_CMT}/${USER.IDUSER()}
    axios
      .get(`https://quanlikhoahoc.herokuapp.com/api/v1/rated/checkValidate/1`, {
        headers: {
          Authorization: `Bearer ${USER.TOKEN()}`,
        },
      })
      .then((res) => {
        this.setState({
          isCmt: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handlePickingStar(e) {
    e.preventDefault();
    swal({
      title: "Submit!",
      text: "Submit your rating",
      icon: "success",
      button: "Submit",
    }).then((result) => {
      if (result) {
        this.setState({
          teacher_rating: e.target.value,
        });
        let { teacher_cmt, teacher_rating } = this.state;
        axios
          .post(
            `${API.API_POST_CMT}`,
            {
              content: teacher_cmt,
              rate: teacher_rating,
              id_teacher: this.props.id_teacher,
            },
            {
              headers: {
                Authorization: `Bearer ${USER.TOKEN()}`,
              },
            }
          )
          .then(() => {
            this.setState({
              teacher_cmt: "",
              teacher_rating: "",
              isCardRating: false,
            });
          })
          .catch((err) => console.log(err));
      } else {
        swal({
          title: "Thank you",
          text: "Submit is false",
          icon: "warning",
        });
      }
    });
  }

  openPopup = (e) => {
    e.preventDefault();
    this.setState({
      isCardRating: true,
    });
  };

  closePopup() {
    this.setState({
      isCardRating: false,
    });
  }
  render() {
    let { isCardRating, isCmt } = this.state;
    return (
      <div className="comment-box">
        <div
          className="parent-card"
          id={isCardRating ? "show-parent-card" : ""}
          onClick={() => this.closePopup()}
        ></div>
        <div
          className="card-rating"
          id={isCardRating ? "show-parent-card" : ""}
        >
          <h1>How many star do you want to give the teacher?</h1>
          <div className="rating">
            <input
              type="radio"
              name="rating"
              value="5"
              id="5"
              onClick={(e) => this.handlePickingStar(e)}
            ></input>
            <label htmlFor="5">☆</label>
            <input
              type="radio"
              name="rating"
              value="4"
              id="4"
              onClick={(e) => this.handlePickingStar(e)}
            ></input>
            <label htmlFor="4">☆</label>
            <input
              type="radio"
              name="rating"
              value="3"
              id="3"
              onClick={(e) => this.handlePickingStar(e)}
            ></input>
            <label htmlFor="3">☆</label>
            <input
              type="radio"
              name="rating"
              value="2"
              id="2"
              onClick={(e) => this.handlePickingStar(e)}
            ></input>
            <label htmlFor="2">☆</label>
            <input
              type="radio"
              name="rating"
              value="1"
              id="1"
              onClick={(e) => this.handlePickingStar(e)}
            ></input>
            <label htmlFor="1">☆</label>
          </div>
          <div className="input-group-append text-center mt-2">
            <button
              className="btn btn-secondary py-2 "
              onClick={() => this.closePopup()}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
        {/* END CARD RATING */}
        <div>
          {isCmt ? (
            <div className="input-group mb-3 d-flex">
              <input
                type="text"
                name="teacher_cmt"
                value={this.state.teacher_cmt}
                onChange={this.handleChange}
                className="form-control py-0 my-0 text-box-custom"
                placeholder="What do you think about the teacher?"
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-submit-cmt py-2"
                  onClick={(e) => this.openPopup(e)}
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <p>
              <i>
                You must be complete the course before commenting and evaluating
                this instructor
              </i>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CommentBox;
