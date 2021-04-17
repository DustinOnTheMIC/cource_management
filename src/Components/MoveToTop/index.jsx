import React, { Component } from 'react';
import './MoveToTopCss.css'
class index extends Component {
   

    scrollFunction = ()=> {
        let btn = document.getElementById("btnMoveToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      }
    handleMoveToTop = e => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    componentDidMount() {
        window.onscroll = ()=> this.scrollFunction()
    }
    

    render() {
        return (
            <button className="btn-move-to-top" onClick={e => this.handleMoveToTop(e)} id="btnMoveToTop"><img src="https://img.icons8.com/fluent/48/000000/double-up.png" alt=""/></button>
        );
    }
}

export default index;