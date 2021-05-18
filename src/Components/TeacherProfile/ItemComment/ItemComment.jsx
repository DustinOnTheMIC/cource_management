import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {
  render() {
    let {name,rate,content}= this.props;
    return (
      <div>
        <div className="item-comment">
          <div className="user-comment">
            <b>{name}</b>
            <br />
            <i>{content}</i>
            <br />
          </div>
          <div className="star-rating-comment">
            {
              Array(rate).fill().map((_,index) => (
                <span key={index} className="fa fa-star checked"></span>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ItemComment;
