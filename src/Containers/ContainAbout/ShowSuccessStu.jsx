import React, { Component } from "react";
import SuccessStuItem from "../../Components/About/SuccessStuItem";
import Carousel from "react-elastic-carousel";
import "../../Components/Common/custom.css";

class ShowSuccessStu extends Component {
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
              <span className="subheading">Testimonial</span>
              <h2 className="mb-5">Our Successful Students</h2>
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
                <SuccessStuItem />
                <SuccessStuItem />
                <SuccessStuItem />
                <SuccessStuItem />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowSuccessStu;
