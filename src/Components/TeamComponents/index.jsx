import React, { Component } from 'react';
import team1 from '../../Assets/images/team-1.jpg'
import team2 from '../../Assets/images/team-2.jpg'
import team3 from '../../Assets/images/team-3.jpg'
import team4 from '../../Assets/images/team-4.jpg'
class index extends Component {
    render() {
        const {name, position, img} = this.props
        return (
            <div className="col-md-6 col-lg-3 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="staff">
                    <div className="img" style={{backgroundImage:`url(${img})`}}>
                        <ul className="ftco-social">
                            <li><a href="#this"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="#this"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="#this"><span className="fa fa-instagram"></span></a></li>
                            <li><a href="#this"><span className="fa fa-google-plus"></span></a></li>
                        </ul>
                    </div>
                    <div className="text">
                        <h3>{name}</h3>
                        <span className="position">{position}</span>
                    </div>
                </div>
            </div>       
        );
    }
}

export default index;