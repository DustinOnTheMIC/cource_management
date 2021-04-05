import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPen } from '@fortawesome/free-solid-svg-icons'
import swal from "sweetalert"
import axios from "axios"
import Loading from '../../Loading/Loading'

class FormInfo extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    handleChange = (e) => {
      this.setState({isLoading: true})
      e.preventDefault();
      if (this.props.name === "password") {
        swal({
          text: `Enter your old password`,
          buttons: true,
          dangerMode: true,
          content: "input",
        }).then((value) => {
          if (value) {
            //call API check old password
            let authorization = "bearer " + localStorage.getItem('token')
            let data = {
              password: value
            }
            console.log(value);
            axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/checkPass',data,{
              headers: {
                'Authorization': authorization
              }
            })
            .then(res => {
              this.setState({isLoading: false})
              swal({
                text: `Enter your new password`,
                buttons: true,
                dangerMode: true,
                content: "input",
                type: 'number'
              }).then((value) => {
                if(value){
                  this.props.onUpdateValue(this.props.name, value)
                  swal(`Done! You just change your password but didn't submit to the server`, {
                    icon: "success",
                  });
                }
              });
            })
          }
        });
      }else{
          swal({
              text: `Enter your new ${this.props.name}`,
              buttons: true,
              dangerMode: true,
              content: "input",
            })
          .then((value) => {
              if(value){
                if(this.props.name === 'phone'){
                  if(isNaN(parseFloat(value))){
                      swal('Your phone number is invalid')
                  }else {
                      this.props.onUpdateValue(this.props.name, value)
                      swal(`Done! You just change your ${this.props.name} to ${value}`, {
                          icon: "success",
                      });
                  }
              }else{
                  this.props.onUpdateValue(this.props.name, value)
                  swal(`Done! You just change your ${this.props.name} to ${value} but didn't submit to the server`, {
                    icon: "success",
                  });
                } 
              }
          });
        }
      };

    render() {
        const { name, content} = this.props
        const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <form className="bio-row row col-12 col-md-6 d-flex justify-content-center">
              {this.state.isLoading ? <Loading/> : null}
                <div className="item-group-info text-center">
                    <span>{capitalizeName}:</span>
                    <span
                        className="text-info">
                        {name === 'password' ? '***********' : content}
                    </span>
                    {name === 'email' ? '' : <FontAwesomeIcon className="ml-5 p5 custom-hover" icon={faPen} onClick={e => this.handleChange(e)} />}
                </div>
            </form>
        );
    }
}

export default FormInfo;