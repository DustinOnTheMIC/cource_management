import axios from "axios";
import React, { Component } from "react";
import Introduce from "../../Components/Common/Introduce/Introduce";
import Loading from "../../Components/Loading/Loading";
import TeamMember from "../../Components/TeamComponents";
import * as API from "../../env";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeacher: "",
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get(API.API_TEACHER)
      .then((res) => {
        this.setState({
          isLoading: false,
          dataTeacher: res.data.data,
        });
      })
  }

  render() {
    let {dataTeacher} = this.state;
    return (
      <div>
        <div>
          {
            <div>{this.state.isLoading ? <Loading /> : null}</div>
          }
        </div>
        <Introduce pageTitle="Team" />
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              {this.dataTeacher(dataTeacher)}
            </div>
          </div>
        </section>
      </div>
    );
  }
  dataTeacher = (dataTeacher) => {
    let result = null;
    if (dataTeacher) {
      result = dataTeacher.map((item, index) => {
        return (
          <TeamMember
            key={index}
            id_teacher={item.id_teacher}
            name={item.name}
            position={item.address}
            img={item.image}
          />
        );
      });
    }
    return result;
  };
}

export default index;
