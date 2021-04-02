import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {
  render() {
    return (
      <div>
        <div class="item-comment">
          <div class="user-comment">
            <span>Tên tài khoản: </span>
            <span> The Rio</span>
            <br />
            <span>Nội dung: </span>
            <span> Thầy ok lắm nha ...</span>
            <br />
          </div>
          <div class="star-rating-comment">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemComment;
