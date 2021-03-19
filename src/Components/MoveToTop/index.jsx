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
            <button className="btn-move-to-top rotate" onClick={e => this.handleMoveToTop(e)} id="btnMoveToTop"><i class="fa fa-fighter-jet"></i></button>
        );
    }
}

export default index;