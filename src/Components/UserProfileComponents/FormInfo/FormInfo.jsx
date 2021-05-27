import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPen } from '@fortawesome/free-solid-svg-icons'
import swal from "sweetalert"
import axios from "axios"
import Loading from '../../Loading/Loading'
import * as USER from '../../../constant'
import { checkValidate } from '../../../validate'
import { Redirect } from "react-router-dom";

class FormInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      returnLogin: false,
    }
  }

  handleChange = (e) => {
    this.setState({ token: `Bearer ${ USER.TOKEN() }`})

    this.props.onLoading(true)
    e.preventDefault();
    if (this.props.name === "password") {
      swal({
        text: `Enter your old password`,
        buttons: true,
        dangerMode: true,
        content: {
          element: "input",
          attributes: {
            type: "password",
          },
        }
      })
      
      .then((value) => {
        this.props.onLoading(false)
        if (value) {
          this.props.onLoading(true)

          //call API check old password
          let data = {
            password: value
          }
          axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/checkPass', data, {
            headers: {
              'Authorization': this.state.token
            }
          })

          .then(() => {
            this.props.onLoading(false)
            swal({
              text: `Enter your new password`,
              buttons: true,
              dangerMode: true,
              content: {
                element: "input",
                attributes: {
                  type: "password",
                },
              }
            }) 

              .then((value) => {
                if(value){
                  if(checkValidate("password", value) === "") {
                    this.props.onUpdateValue("password", value)
                    swal(`Done! You just change your password but didn't submit to the server`, {
                      icon: "success",
                    });

                  } else {
                    swal(checkValidate("password", value), {
                      icon: "warning",
                    });
                  }
                }
              });
          })

          .catch(err => {
            let status = err.response.status
            this.props.onLoading(false)
            
            if(status === 400){
              swal(`Your password is incorrect`, {
                icon: "warning",
              });

            } else if(status === 401) {
              swal(`Please Login again to use this feature`, {
                icon: "error",
              })
              .then(value => {
                if(value){
                  this.setState({returnLogin: true})
                }
              })
            } else {
              swal(`There is an error with the server, please try again.`, {
                icon: "error",
              })
            }
            
          })
        }
      });

    } else {

      swal({
          text: `Enter your new ${this.props.name}`,
          buttons: true,
          dangerMode: true,
          content: "input",
      })

        .then((value) => {

          this.props.onLoading(false)
            if(value){
              if(this.props.name === 'phone') {
                if(checkValidate("phone", value) === "") {
                  this.props.onUpdateValue(this.props.name, value)
                  swal(`Done! You just change your ${this.props.name} to ${value}`, {
                        icon: "success",
                  });

                } else {
                    swal(checkValidate("phone", value), {icon: 'warning'})
                }

            } else {

                if(checkValidate("name", value) === "") {
                  this.props.onUpdateValue(this.props.name, value)
                  swal(`Done! You just change your ${this.props.name} to ${value} but didn't submit to the server`, {
                    icon: "success",
                  });

                } else {
                  swal(checkValidate("name", value), {icon: 'warning'})
                }

              }
            }
        });
      }
    };

  handleShowEdit(id) {
    let element = document.getElementById(id);
    if(element) {
      element.classList.remove('invisible');
    }
  }

  handleHideEdit(id) {
    let element = document.getElementById(id);
    if(element) {
      element.classList.add('invisible');
    }
  }

    render() {
        const { name, content} = this.props
        const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <form className="bio-row row col-12 col-md-6 d-flex justify-content-center">
              { this.state.returnLogin ? <Redirect to="/login" className="nav-link"></Redirect> : null }
              { this.state.isLoading ? <Loading/> : null }
                <div
                 className="item-group-info text-center" 
                 onMouseMove={() => this.handleShowEdit(name)}
                 onMouseLeave={() => this.handleHideEdit(name)}>
                    <span>{capitalizeName}:</span>
                    <label
                        className="text-info">
                        {name === 'password' ? '***********' : content}
                    </label>
                    { name === 'email' ? <p></p> : <FontAwesomeIcon id={name} className="ml-5 p5 custom-hover invisible" icon={faPen} onClick={e => this.handleChange(e)} /> }
                </div>
            </form>
        );
    }
}

export default FormInfo;