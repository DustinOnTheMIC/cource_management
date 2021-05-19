import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class SuggestClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            math: ""
        }
    }

    componentDidMount() {
        console.log(this.props);
        const { steps } = this.props;
        const { math } = steps;
        this.setState({ math: math.value });
    }

    handleClick( math ) {

        switch (math) {
            case 8:
                this.setState({ goTo: "class/chatbot/all/3" });
                break;
            case 5:
                this.setState({ goTo: "class/chatbot/all/2" });
                break;
            default:
                this.setState({ goTo: "class/chatbot/all/1" });
                break;
        }

        this.setState({ redirect: true })
    }

    render() {
        const { math } = this.state
        return (
            <div className="row">
                { this.state.redirect ? (<Redirect push to={this.state.goTo} />) : null }
                
  
                { math >= 8 ? 
                    <button 
                        style={{color:"yellow"}} 
                        onClick={e => this.handleClick(8)}>
                            Click here to go to classes level 3
                    </button>
                
                : math >= 5 ? 
                    <button 
                        style={{color:"yellow"}} 
                        onClick={e => this.handleClick(5)}>
                        Click here to go to classes level 2
                    </button>
                
                :  math < 5 ?
                    <button 
                        style={{color:"yellow"}} 
                        onClick={e => this.handleClick(4)}>
                            Click here to go to classes level 1
                    </button>
                : null }

            </div>
        );
    }
    
    // render() {
    //     const { math, like } = this.state
    //     return (
    //         <div className="row">
    //             { this.state.redirect ? (<Redirect push to={this.state.goTo} />) : null }
                
    //             { math > 5 && like === "web" ?
    //                 <div>
    //                     <button style={{color:"yellow"}} onClick={e => this.handleClick(6, "web")}>Click here to go to your suitable classes</button>
    //                 </div>
    //                 : math >= 8 && like === "web" ? 
    //                     <div>
    //                         <button style={{color:"yellow"}} onClick={e => this.handleClick(8, "web")}>Click here to go to your suitable classes</button>
    //                     </div>
    //                     : math < 5 && like === "web" ?
    //                         <div>
    //                             <button style={{color:"yellow"}} onClick={e => this.handleClick(5, "web")}>Click here to go to your suitable classes</button>
    //                         </div>
    //                         : math > 5 && like === "app" ?
    //                             <div>
    //                                 <button style={{color:"yellow"}} onClick={e => this.handleClick(6, "app")}>Click here to go to your suitable classes</button>
    //                             </div>
    //                             : math >= 8 && like === "app" ?
    //                                 <div>
    //                                     <button style={{color:"yellow"}} onClick={e => this.handleClick(8, "web")}>Click here to go to your suitable classes</button>
    //                                 </div>
    //                                 : math < 5 && like === "app" ?
    //                                     <div>
    //                                         <button style={{color:"yellow"}} onClick={e => this.handleClick(5, "web")}>Click here to go to your suitable classes</button>
    //                                     </div>
    //                                     : null
    //             }
    //         </div>
    //     );
    // }
}

export default SuggestClass;