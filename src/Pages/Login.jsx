import React, { Component } from 'react';
import imgLogin from '../Assets/images/undraw_remotely_2j6y.svg'
import { Redirect } from 'react-router-dom';
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

    isEmail = (arg) => {
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
      

    render() {
        return (
            
            <div>
                {this.state.redirect ? (<Redirect push to="/"/>) : null}
                <div class="content mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src={imgLogin} alt="Imag" class="img-fluid"></img>
                            </div>
                            <div class="col-md-6 contents mt-5">
                                <div class="d-flex">
                                <div id="formCheckEmail" class="row justify-content-center mt-5 col-12">
                                    <div class="col-md-8">
                                        <div class="mb-4">
                                            <h3>Check Your Email</h3>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                                adipisicing.</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div class="form-group first mt-5">
                                                <label for="username">Your Email</label>
                                                <input type="text" placeholder="Email" class="form-control mb-5"></input>
                                            </div>
                                            <input type="submit" value="Next Step" class="btn btn-block mt-5 btn-warning" onClick={e => this.handleCheckEmail(e)}></input>
                                        </form>
                                    </div>
                                </div>
                                <div id="formSignIn" class="row justify-content-center mt-5 col-12">
                                    <div class="col-md-8">
                                        <div class="mb-4">
                                            <h3>Sign In</h3>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                                adipisicing.</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div class="form-group first mt-5">
                                                <label for="username">Your Password</label>
                                                <input type="text" placeholder="Password" class="form-control mb-5"></input>
                                            </div>
                                            <input type="submit" value="Sign In" class="btn btn-block mt-5 btn-primary" onClick={e => this.handleSignIn(e)}></input>
                                        </form>
                                    </div>
                                </div>
                                <div id="formSignUp" class="row justify-content-center mt-5 col-12">
                                    <div class="col-md-8">
                                        <div class="mb-4">
                                            <h3>Sign Up</h3>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                                adipisicing.</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div class="form-group first mt-5">
                                                <label for="username">Your Phone Number</label>
                                                <input type="text" placeholder="Phone number" class="form-control mb-5"></input>
                                            </div>
                                            <input type="submit" value="Sign Up" class="btn btn-block mt-5 btn-primary" onClick={e => this.handleSignUp(e)}></input>
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