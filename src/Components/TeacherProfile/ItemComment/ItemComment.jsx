import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {
  render() {
    return (
        <div class="item-comment">
            <span class="star-rating-comment" style={{float: 'right'}}>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </span>
          <div class="user-comment ">
            <span class="text-muted display-5 col-12" style={{fontSize:'12px', lineHeight: '1px'}}>ID: 123123123 | Date: 10/1/2021</span>
            <div class="ml-5">
              <span > Thầy ok lắm nha ...</span>
            </div>
          </div>
          
        </div>
    );
  }
}

export default ItemComment;
