import React, { Component } from "react";
import SuccessStuItem from "../../Components/About/SuccessStuItem";
import Carousel from "react-elastic-carousel";
import "../../Components/Common/custom.css";
import son from '../../Assets/images/son.jpg'
import tin from '../../Assets/images/tin.jpg'
import hson from '../../Assets/images/hson.jpg'
import duy from '../../Assets/images/duy.jpg'

class ShowSuccessStu extends Component {
  constructor(props) {
    super(props);
    this.dataAbount = [
      {
        name : "Thanh Son",
        role : "Frontend developer",
        img : son,
        des : "Student at Duy Tan University - Class K23-TPM1 - Student code : 2321117978 - GMO Employee"
      },
      {
        name : "Duc Tin",
        role : "Frontend developer",
        img : tin,
        des : "Student at Duy Tan University - Class K23-TPM1 - Student code : 2321122981 - Hitachi Employee"
      },
      {
        name : "Hoai Son",
        role : "Backend developer",
        img : hson,
        des : "Student at Duy Tan University - Class K23-TPM1 - Student code : 2321118094 - Hitachi Employee"
      },
      {
        name : "Ngoc Duy ",
        role : "Backend developer",
        img : duy,
        des : "Student at Duy Tan University - Class K23-TPM1 - Student code : 2321120536 - FPT Employee"
      },
    ]
  }
  
  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    return (
      <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div
              className="col-md-7 text-center heading-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Operating System</span>
              <h2>Our Admin System</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Carousel breakPoints={breakPoints}>
               {this.itemAbount(this.dataAbount)}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
  itemAbount = (data) => {
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
          />
        )
      })
    }
    return result
  }
}

export default ShowSuccessStu;
