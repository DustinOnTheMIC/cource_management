import React, { Component } from 'react';

class SuggestClass extends Component {

    constructor(props) {
        super(props);
        const { steps } = this.props;
        const {math, askLike } = steps;
    
        this.state =  { math, askLike }; 
    }

    componentDidMount() {
        console.log(this.state);
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SuggestClass;