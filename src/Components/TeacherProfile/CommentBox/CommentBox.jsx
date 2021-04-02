import React, { Component } from 'react';
import swal from '@sweetalert/with-react'
import './Rating.css'

class CommentBox extends Component {
    handleRating = e => {
        e.preventDefault()
        swal({
          text: `How many star do you want to give him?`,
          buttons: true,
          dangerMode: true,
          content: <div>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5"></input>
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
        }).then((value) => {
          if(value){
            //Call API comment
            swal("Thanks for your time", {
              icon: "success",
            });
          }
        })
    }
    render() {
        return (
            <div class="col-8">
                <div class="input-group mb-3 d-flex ">
                  <input type="text" class="form-control py-0 my-0 text-box-custom" placeholder="What do you think about him?"></input>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary py-2" onClick={e => this.handleRating(e)} type="button">Submit</button>
                  </div>
                </div>
            </div>
        );
    }
}

export default CommentBox; 