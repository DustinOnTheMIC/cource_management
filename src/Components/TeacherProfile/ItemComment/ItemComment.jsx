import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {
  render() {
    return (
      <div>
        <div class="item-comment">
          <div class="user-comment">
            <span>The Rio</span>
            <br />
            <span>This teacher make me think about my farther, coz he is my father</span>
            <br />
          </div>
          <div class="star-rating-comment">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
           <span class="fa fa-star-o"></span> 

          </div>
        </div>
      </div>
    );
  }
}

export default ItemComment;
