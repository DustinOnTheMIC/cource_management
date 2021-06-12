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

        const { steps } = this.props;
        const { math } = steps;
        this.setState({ math: math.value }, () => this.handleClick());
    }

    handleClick() {
        const { math } = this.state;
        
        if(math >= 8) {
            this.setState({ goTo: "class/chatbot/all/3" });
        } else if(math >= 5) {
            this.setState({ goTo: "class/chatbot/all/2" });
        } else {
            this.setState({ goTo: "class/chatbot/all/1" });
        }

        this.setState({ redirect: true }, () => window.location.reload() );
    }

    render() {
        return (
            <div className="d-none">
                { this.state.redirect ? (
                    <div>
                        <Redirect push to="/" />
                        <Redirect push to={this.state.goTo} />
                    </div>
                ) : null }
            </div>
        );
    }
}

export default SuggestClass;