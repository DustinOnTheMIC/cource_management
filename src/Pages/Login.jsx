import React, { Component } from 'react';
import imgLogin from '../Assets/images/undraw_remotely_2j6y.svg'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        document.getElementById('formCheckEmail').classList.remove('d-none')
        document.getElementById('formSignUp').classList.add('d-none')
        document.getElementById('formSignIn').classList.add('d-none')

        let header = document.getElementById('header');
        let footer = document.getElementById('footer');
        if(header && footer){
          header.style.display = 'none';
          footer.style.display = 'none';
        }
    }
    
    handleBackToHome = () => {
        let header = document.getElementById('header');
        let footer = document.getElementById('footer');
        if(header && footer){
          header.style.display = 'block';
          footer.style.display = 'block';
        }
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
        //call API check email
        //if true => 
        e.preventDefault()
        this.isEmail(true)
        
    }

    handleTurnBack = e => {
        e.preventDefault()
        document.getElementById('formCheckEmail').classList.remove('d-none')
        document.getElementById('formSignUp').classList.add('d-none')
        document.getElementById('formSignIn').classList.add('d-none')
    }

    handleSignIn = e => {
        //call API check Password
        //if true =>
        e.preventDefault()
        this.handleBackToHome()
        this.setState({redirect: true})
    }

    handleSignUp = e => {
        e.preventDefault()
        this.handleBackToHome()
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
        return (
            
            <div>
                {this.state.redirect ? (<Redirect push to="/"/>) : null}
                <div className="content mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={imgLogin} alt="Imag" className="img-fluid"></img>
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
                                                <label for="username">Your Email</label>
                                                <input type="text" placeholder="Email" className="form-control mb-5"></input>
                                            </div>
                                            <input type="submit" value="Next Step" className="btn btn-block mt-5 btn-primary" onClick={e => this.handleCheckEmail(e)}></input>
                                        </form>
                                    </div>
                                </div>
                                <div id="formSignIn" className="row justify-content-center mt-5 col-12">
                                    <div className="col-md-8">
                                        <div className="mb-4">
                                            <h3>Sign In</h3>
                                            <p className="mb-4">Hi Dustin welcome back to our course <br></br> Please enter your password</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="form-group first mt-5">
                                                <label for="username">Your Password</label>
                                                <input type="password" placeholder="Password" className="form-control mb-5"></input>
                                            </div>
                                            <a href="#forgetpassword" onClick={e => this.handleForgetPassword(e)} className="">forget password?</a>
                                            <div>
                                                <input type="submit" value="Turn Back" className="btn btn-block mt-5 btn-outline-primary" onClick={e => this.handleTurnBack(e)}></input>
                                                <input type="submit" value="Sign In" className="btn btn-block mt-5 btn-primary" onClick={e => this.handleSignIn(e)}></input>
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
                                                <label for="username">Your Name</label>
                                                <input type="text" placeholder="Name" className="form-control mb-5"></input>
                                            </div>
                                            <div className="form-group first mt-5">
                                                <label for="username">Your Phone Number</label>
                                                <input type="number" placeholder="Phone number" className="form-control mb-5"></input>
                                            </div>
                                            <input type="submit" value="Turn Back" className="btn btn-block mt-5 btn-outline-primary" onClick={e => this.handleTurnBack(e)}></input>
                                            <input type="submit" value="Sign Up" className="btn btn-block mt-5 btn-primary" onClick={e => this.handleSignUp(e)}></input>
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

export default Login;