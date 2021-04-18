import React, { Component } from 'react';
import imgLogin from '../Assets/images/undraw_remotely_2j6y.svg'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert'
import axios from 'axios';
import Loading from '../Components/Loading/Loading'
import * as USER from '../constant'
import { checkValidate } from '../validate'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            verifyEmail: true,
        }
    }

    timeoutFakeLogStatus = null

    setTimer = () => {
        this.timeoutFakeLogStatus = setTimeout(() => {
            USER.CLEAR_LOCALSTORAGE()
        }, 1000*60*60);
    }

    clearTimer = () => {
        clearTimeout(this.timeoutFakeLogStatus)
    }

    componentDidMount() {
        document.getElementById('formCheckEmail').classList.remove('d-none')
        document.getElementById('formSignUp').classList.add('d-none')
        document.getElementById('formSignIn').classList.add('d-none')
        localStorage.removeItem('isLog')
        USER.CLEAR_LOCALSTORAGE()
    }

    handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        this.setState({[name]: value})
    }

    isEmail = arg => {
        if(arg){
            document.getElementById('formCheckEmail').classList.add('d-none')
            document.getElementById('formSignUp').classList.add('d-none')
            document.getElementById('formSignIn').classList.remove('d-none')
        }else{
            document.getElementById('formCheckEmail').classList.add('d-none')
            document.getElementById('formSignUp').classList.remove('d-none')
            document.getElementById('formSignIn').classList.add('d-none')
        }
    }

    handleCheckEmail = e => {
        e.preventDefault()

        if(checkValidate('email', this.state.email) === "") {
            //call API check email
            if(this.state.email !== undefined && this.state.email !== '') {
                this.setState({isLoading: true})
                axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/auth/name', {
                    email: this.state.email
                })

                .then(res => {
                    this.setState({name: res.data.name})
                    this.isEmail(true)
                    this.setState({isLoading: false})
                })

                .catch(err => {
                    this.setState({ isLoading: false })

                    if(err.response.status === 400 ){
                        this.isEmail(false)
                        this.setState({ isEmail:false })
                    }
                })
            } else {
                this.setState({verifyEmail: false})
            }
            //if true => 
            // this.isEmail(true)
        } else {
            swal(checkValidate("email", this.state.email).toString(), {
                icon: "warning",
            })
        }
    }

    handleTurnBack = e => {
        e.preventDefault()
        document.getElementById('formCheckEmail').classList.remove('d-none')
        document.getElementById('formSignUp').classList.add('d-none')
        document.getElementById('formSignIn').classList.add('d-none')
    }

    handleSignIn(e) {
        e.preventDefault()
        
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        USER.CLEAR_LOCALSTORAGE() // clear local storage
        //if true =>
        this.setState({isLoading: true})

        
        //call API check Password
        axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/auth/login', data)

        .then(res => {
            localStorage.setItem('idUser', res.data.data.id) // set idUser
            localStorage.setItem('token', res.data.data.access_token) // set token
            this.clearTimer()
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            localStorage.removeItem('phone')
            this.setState({isLoading: false})
            this.setState({redirect: true})
        })

        .catch(err => {
            this.setState({isLoading: false})
            const status = err.response.status;

            if(status === 400) {
                swal({
                    text: `Your password is incorrect`,
                    icon: 'warning'
                })
            }else {
                swal(`There is an error with the server, please try again.`, {
                icon: "error",
                })
            }
        })
    }

    handleSignUp = e => {
        e.preventDefault()
        localStorage.setItem('name', this.state.name)
        localStorage.setItem('email', this.state.email)
        localStorage.setItem('phone', this.state.phone)
        localStorage.setItem('isLog', 'fakeLog')
        
        localStorage.removeItem('token')
        this.clearTimer()
        this.setTimer()
        this.setState({redirect: true})
    }
    
    handleForgetPassword = e => {
        e.preventDefault()

        swal({
            text: `Please enter the code that sent in you email`,
            buttons: true,
            dangerMode: true,
            content: "input",
        })

        .then((value) => {
            if (value) {
            //call API check the code sended
                swal({
                    text: `Enter your new password`,
                    buttons: true,
                    dangerMode: true,
                    content: "input",
                    type: 'number'
                })

                .then((value) => {
                    if(value){
                        //call API change password
                        swal(`Done! You just change your password`, {
                        icon: "success",
                        });
                    }
                });
            }
        }); 
    }

    render() {
        const {name} = this.state
        return (
            <div>
                {this.state.isLoading ? <Loading/> : null}
                {this.state.redirect ? (<Redirect push to="/" />) : null}
                <div className="content mt-5">
                    <div className="container">
                        
                        <div className="row">
                        
                            <div className="col-md-6">
                                <a className="mb-5 display-3" href="#">ACADEMIA</a>
                                <img src={imgLogin} alt="Imag" className="img-fluid mt-1"></img>
                            </div>
                            <div className="col-md-6 contents mt-5">
                                <div className="d-flex">
                                <div id="formCheckEmail" className="row justify-content-center mt-5 col-12">
                                    <div className="col-md-8">
                                        <div className="mb-4">
                                            <h3>Check Your Email</h3>
                                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                                adipisicing.</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="form-group first mt-5">
                                                <label >Your Email</label>
                                                <input type="text" placeholder="Email" name="email" className="form-control" onChange={e => this.handleInputChange(e)}></input>
                                                {this.state.verifyEmail ===true ? "" : <p className="validate">your email is not valid</p>}
                                            </div>
                                            <input type="submit" value="Next Step" className="btn btn-block mt-5 btn-primary clearfix" onClick={e => this.handleCheckEmail(e)}></input>
                                        </form>
                                    </div>
                                </div>
                                <div id="formSignIn" className="row justify-content-center mt-5 col-12">
                                    <div className="col-md-8">
                                        <div className="mb-4">
                                            <h3>Sign In</h3>
                                            <p className="mb-4">Hi {name} welcome back to our course <br></br> Please enter your password</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="form-group first mt-5">
                                                <label>Your Password</label>
                                                <input type="password" placeholder="Password" name="password" className="form-control mb-5" onChange={e => this.handleInputChange(e)}></input>
                                            </div>
                                            <a href="#forgetpassword" onClick={e => this.handleForgetPassword(e)} className="">forget password?</a>
                                            <div>
                                                <input type="submit" value="Turn Back" className="btn btn-block mt-5 btn-outline-primary clearfix" onClick={e => this.handleTurnBack(e)}></input>
                                                <input type="submit" value="Sign In" className="btn btn-block mt-5 btn-primary clearfix" onClick={e => this.handleSignIn(e)}></input>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div id="formSignUp" className="row justify-content-center mt-5 col-12">
                                    <div className="col-md-8">
                                        <div className="mb-4">
                                            <h3>Sign Up</h3>
                                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                                adipisicing.</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="form-group first mt-5">
                                                <label>Your Name</label>
                                                <input type="text" placeholder="Name" className="form-control mb-5" name='name' onChange={e => this.handleInputChange(e)}></input>
                                            </div>
                                            <div className="form-group first mt-5">
                                                <label>Your Phone Number</label>
                                                <input type="number" placeholder="Phone number" name="phone" className="form-control mb-5" onChange={e => this.handleInputChange(e)}></input>
                                            </div>
                                            <input type="submit" value="Turn Back" className="btn btn-block mt-5 btn-outline-primary clearfix" onClick={e => this.handleTurnBack(e)}></input>
                                            <input type="submit" value="Sign Up" className="btn btn-block mt-5 btn-primary clearfix" onClick={e => this.handleSignUp(e)}></input>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login