import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class SuggestClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            math: "",
            like: ""
        }
    }

    componentDidMount() {
        const { steps } = this.props;
        const { math, optionsLike } = steps;
        console.log(math.value, optionsLike.value);
        this.setState({ math: math.value, like: optionsLike.value });
    }

    handleClick(math, like) {
        if(math > 5 && like === "web") {
            this.setState({goTo: "/subject/2/class"})
        }
        
        if(math >= 8 && like === "web") {

        }
        this.setState({redirect: true})

    }
    
    render() {
        const { math, like } = this.state
        return (
            <div className="row">
                { this.state.redirect ? (<Redirect push to={this.state.goTo} />) : null }
                
                { math > 5 && like === "web" ?
                    <div>
                        <button style={{color:"yellow"}} onClick={e => this.handleClick(6, "web")}>Click here to go to your suitable classes</button>
                    </div>
                    : math >= 8 && like === "web" ? 
                        <div>
                            <button style={{color:"yellow"}} onClick={e => this.handleClick(8, "web")}>Click here to go to your suitable classes</button>
                        </div>
                        : math < 5 && like === "web" ?
                            <div>
                                <button style={{color:"yellow"}} onClick={e => this.handleClick(5, "web")}>Click here to go to your suitable classes</button>
                            </div>
                            : math > 5 && like === "app" ?
                                <div>
                                    <button style={{color:"yellow"}} onClick={e => this.handleClick(6, "app")}>Click here to go to your suitable classes</button>
                                </div>
                                : math >= 8 && like === "app" ?
                                    <div>
                                        <button style={{color:"yellow"}} onClick={e => this.handleClick(8, "web")}>Click here to go to your suitable classes</button>
                                    </div>
                                    : math < 5 && like === "app" ?
                                        <div>
                                            <button style={{color:"yellow"}} onClick={e => this.handleClick(5, "web")}>Click here to go to your suitable classes</button>
                                        </div>
                                        : null
                }
            </div>
        );
    }
}

export default SuggestClass;