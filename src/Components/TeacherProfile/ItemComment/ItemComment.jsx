import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {
  render() {
    return (
      <div>
        <div className="item-comment">
          <div className="user-comment">
            <span>The Rio</span>
            <br />
            <span>This teacher make me think about my farther, coz he is my father</span>
            <br />
          </div>
          <div className="star-rating-comment">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
           <span className="fa fa-star-o"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemComment;
