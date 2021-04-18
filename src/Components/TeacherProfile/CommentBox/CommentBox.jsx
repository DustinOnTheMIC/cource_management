import React, { Component } from "react";
import swal from "@sweetalert/with-react";
import "./Rating.css";
import axios from "axios";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher_cmt: "",
      teacher_rating: "",
      isCardRating: false,
    };
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
          isCardRating: false,
        });
        let { teacher_cmt, teacher_rating } = this.state;
        let dataSubmit = {
          content: teacher_cmt,
          rated: teacher_rating,
          id_teacher: this.props.id_teacher,
        };
        console.log(dataSubmit);
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
    let { isCardRating } = this.state;
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
        <div className="input-group mb-3 d-flex">
          <input
            type="text"
            name="teacher_cmt"
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
      </div>
    );
  }
}

export default CommentBox;
