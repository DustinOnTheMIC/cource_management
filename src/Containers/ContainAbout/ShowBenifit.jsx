import React, { Component } from "react";
import BenifitItem from "../../Components/About/BenifitItem";
import imgAbout from "../../Assets/images/about.jpg";

class ShowBenifit extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-5">
            <div
              className="col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div
                className="img w-100"
                style={{ backgroundImage: `url(${imgAbout})` }}
              ></div>
            </div>
            <div
              className="col-md-6 heading-section d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="mt-0 my-lg-5">
                <span className="subheading">Learn Anything</span>
                <h2 className="mb-2">Benefits About Our System</h2>
                <div className="row mt-4 g-lg-2">
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon">
                        <span className="flaticon-online-learning"></span>
                      </div>
                      <div className="text">
                        <h2>Register Online</h2>
                        <p className="mb-0 text-left">
                          You can save time in the registration process,
                          registration becomes easier. Moreover, you also get
                          10% off each course by registering online
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon">
                        <span className="flaticon-scientist"></span>
                      </div>
                      <div className="text">
                        <h2>Teacher Information</h2>
                        <p className="mb-0 text-left">
                          The most complete information on instructors and
                          reviews from other students
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon">
                        <span className="flaticon-certificate"></span>
                      </div>
                      <div className="text">
                        <h2>Subject</h2>
                        <p className="mb-0 text-left">
                          The system is committed to the most solid training in
                          theoretical knowledge as well as practice with all the
                          subjects that our system provides.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowBenifit;
