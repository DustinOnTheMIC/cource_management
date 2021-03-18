import React, { Component } from 'react';
import './Error404Css.css'
import { NavLink } from 'react-router-dom';

class Error404 extends Component {
  componentDidMount() {
    console.log('mouted');
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    if(header){
      header.style.display = 'none';
      footer.style.display = 'none';
    }
  }

  componentWillUnmount() {
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    if(header && footer){
      header.style.display = 'auto';
      footer.style.display = 'auto';
    }
  }
  
  render() {
    return (
      <div class="page_404">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-sm-12 ">
              <div class="text-center align-items-center justify-content-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>
                <div class="contant_box_404">
                  <h3 class="h2">
                    Look like you're lost
                  </h3>
                  <p>the page you are looking for not avaible!</p>
                  <NavLink exact to="/" class="link_404">Back To Our Courses</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;