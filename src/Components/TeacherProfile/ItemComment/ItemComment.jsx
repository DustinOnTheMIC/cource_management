import React, { Component } from "react";
import './ItemComment.css'

class ItemComment extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.handleDrawStart(this.props.rate);
  }

  handleDrawStart(rateStart) {
    let rate = [];

    if(rateStart < 1) {
        for(let i = 1; i <= 5; i++) {
          rate.push(<span className="far fa-star"></span>);
        }

    } else {
        
        for(let i = 1; i <= rateStart; i++) {
          rate.push(<span className="fa fa-star"></span>);
        }

        if(rateStart < 5) {
            let temp = 5 - rateStart;
            for(let i = 1; i <= temp; i ++) {
              rate.push(<span className="far fa-star"></span>)
            }
        }
    }

    this.setState({ rate })
  }
  

  render() {
    const { name, content } = this.props;
    const { rate } = this.state
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
            { rate ? rate.map(item => item) : null }
          </div>
        </div>
      </div>
    );
  }
}

export default ItemComment;
