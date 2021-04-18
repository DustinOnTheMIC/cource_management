import React, { Component } from 'react';
import swal from '@sweetalert/with-react'
import './Rating.css'

class CommentBox extends Component {

  handleInputChange(e){
    console.log(e);
  }

    handleRating = e => {
        e.preventDefault()
        swal({
          text: `How many star do you want to give him?`,
          buttons: true,
          dangerMode: true,
          content: 
          <div>
            <div className="rating">
              <input  type="radio" name="rating" value="5" id="ip5" onClick={e => this.handleInputChange(e)}></input>
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4"></input>
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3"></input>
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2"></input>
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1"></input>
              <label for="1">☆</label>
            </div>
          </div>,
        })
        .then((value) => {
          if(value){
            //Call API comment
            console.log(value);
            swal("Thanks for your time", {
              icon: "success",
            });
          }
        })
    }
    render() {
        return (
            <div className="col-8">
                <div className="input-group mb-3 d-flex ">
                  <input type="text" className="form-control py-0 my-0 text-box-custom" placeholder="What do you think about him?"></input>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary py-2" onClick={e => this.handleRating(e)} type="button">Submit</button>
                  </div>
                </div>
            </div>
        );
    }
}

export default CommentBox; 