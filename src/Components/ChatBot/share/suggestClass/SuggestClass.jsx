import React, { Component } from 'react';


class SuggestClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const { steps } = this.props;
        const { math, askLike } = steps;
        this.setState({ math: math.value, like: askLike.value });

        console.log(this.state.math);
    }
    
    render() {
        const { math, like } = this.state
        console.log(this.state);
        return (
            <div className="row">
                <h1>{math}</h1>
                <h1>{like}</h1>
            </div>
        );
    }
}

export default SuggestClass;