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

  handleBackToHome = () => {
    console.log('called');
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    if(header && footer){
      header.style.display = 'block';
      footer.style.display = 'block';
    }
  }
  
  render() {
    return (
      <div className="page_404">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 ">
              <div className="text-center align-items-center justify-content-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">
                    Look like you're lost
                  </h3>
                  <p>the page you are looking for not avaible!</p>
                  <NavLink exact to="/" onClick={() => this.handleBackToHome()} className="link_404">Back To Our Courses</NavLink>
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