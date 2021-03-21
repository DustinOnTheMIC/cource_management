import React, { Component } from "react";
import Introduce from "../../Components/Common/Introduce/Introduce";
import Classes from "../../Components/AllClassBodyComponents/Classes";
class index extends Component {
  render() {
    return (
      <div>
        <Introduce pageTitle="Classes" />
        <section className="ftco-section courses-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <Classes />
              </div>
              <div className="col-md-6 col-lg-4">
                <Classes />
              </div>
              <div className="col-md-6 col-lg-4">
                <Classes />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default index;
