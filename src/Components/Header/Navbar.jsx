import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    
    componentDidMount() {
        console.log(this.props);
    }
    
    render() {    
        let isLogin = ''
        if(localStorage.getItem('token')){
            isLogin = 'log'
        }else if(localStorage.getItem('isLog')==='fakeLog'){
            isLogin = 'fakeLog'
        }
        
        return (
            <nav className="navbar navbar-expand-lg  ftco-navbar-light">
                <div className="container-xl">
                    <a href="#this" className="btn-custom order-lg-last">Get Start</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/all_class" className="nav-link">
                                    All Class
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/team" className="nav-link">
                                    Teachers
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                            {
                                isLogin === 'fakeLog' ? <li className="nav-item"><NavLink className="nav-link" to='/login'>Change Account</NavLink></li> : 
                                    isLogin === 'log' ? <li className="nav-item"><NavLink className="nav-link" to='/profile'>Profile</NavLink></li>
                                    : <li className="nav-item"><NavLink className="nav-link" to='/login'>Login</NavLink></li> 
                             }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar