import React, { Component } from 'react';
import './ShowSuccessCSS.css'

class SuccessStuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ""
        }
    }

    componentDidMount() {
        const array = this.props.img;

        this.setState({image: array[0]});

        if(array.length > 1) {
            setInterval(() => {
                this.handleChangeImage(array);
            }, 2000);
        }
    }

    handleChangeImage(array) {
        let index = array.indexOf(this.state.image);

        if(index === array.length -1) {
            index = 0;
        } else {
            index += 1;
        }
        this.setState({image: array[index]});
    }

    render() {
        let { name, role, des } = this.props;
        return (
            <div className="card-custom col-12 col-lg-3 mx-3 my-3" style={{ backgroundImage: `url(${this.state.image})`}}>
                <div className="card-body-custom">
                    <h2 className="card-title-custom">{ name }</h2>
                    <p>{ role }</p>
                    { des.map( (item) => <p key={item} className="msg text-left" style={{marginBottom:"0"}}>{ item }</p> ) }
                </div>
            </div>
        );
    }
}

export default (SuccessStuItem);