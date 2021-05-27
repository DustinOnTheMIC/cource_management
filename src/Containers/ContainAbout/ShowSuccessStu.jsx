import React, { Component } from "react";
import SuccessStuItem from "../../Components/About/SuccessStuItem";
import "../../Components/Common/custom.css";

import son from '../../Assets/images/son.jpg';

import duy from '../../Assets/images/duy.jpg';
import duy1 from "../../Assets/images/duy1.jpg";
import duy2 from "../../Assets/images/duy2.jpg";


import tin from '../../Assets/images/tin.jpg';
import tin1 from '../../Assets/images/tin1.jpg';
import tin2 from '../../Assets/images/tin2.jpg';

import hson from '../../Assets/images/hson.jpg';
import hson1 from '../../Assets/images/hson1.jpg';

class ShowSuccessStu extends Component {
  constructor(props) {
    super(props);
    this.dataAbout = [
      {
        name : "Thanh Son",
        role : "Frontend developer",
        img : [son],
        des : ["Student at Duy Tan University", "Class K23-TPM1", "Student code : 2321117978", "GMO Employee"],
      },
      {
        name : "Duc Tin",
        role : "Frontend developer",
        img : [tin2, tin, tin1],
        des : ["Student at Duy Tan University", "Class K23-TPM1", "Student code : 2321122981", "Hitachi Employee"],
      },
      {
        name : "Hoai Son",
        role : "Backend developer",
        img : [hson, hson1],
        des : ["Student at Duy Tan University", "Class K23-TPM1", "Student code : 2321118094", "Hitachi Employee"],
      },
      {
        name : "Ngoc Duy ",
        role : "Backend developer",
        img : [duy, duy1, duy2],
        des : ["Student at Duy Tan University", "Class K23-TPM1", "Student code : 2321120536", "FPT Employee"],
      },
    ]
  }
  
  render() {
    return (
      <section className="ftco-section testimony-section bg-light wrap-cards mx-0 px-0">
        <div className="container-xl">
          <div className="row justify-content-center pb-4 mx-0 px-0">
            <div
              className="col-md-7 text-center heading-section mx-0 px-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Operating System</span>
              <h2>Our Admin System</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 d-flex flex-wrap justify-content-center "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100" 
            >

              {this.itemAbout(this.dataAbout)}

            </div>
          </div>
        </div>
      </section>
    );
  }
  itemAbout = (data) => {
    let result = null
    if(data){
      result = data.map((item,index) => {
        return (
          <SuccessStuItem
            key={index}
            name={item.name}          
            role={item.role}          
            des={item.des}          
            img={item.img}
            img_position={item.img_position} 
          />
        )
      })
    }
    return result
  }
}

export default ShowSuccessStu;
