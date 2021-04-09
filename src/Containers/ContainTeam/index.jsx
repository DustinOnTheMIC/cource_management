import axios from "axios";
import React, { Component } from "react";
import Introduce from "../../Components/Common/Introduce/Introduce";
import TeamMember from "../../Components/TeamComponents";
import * as API from "../../env";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeacher: "",
    };
  }
  componentDidMount() {
    axios
      .get(API.API_TEACHER)
      .then((res) => {
        this.setState({
          dataTeacher: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
      let {dataTeacher} = this.state;
    return (
      <div>
        <Introduce pageTitle="Team" />
        <section className="ftco-section">
          <div className="container">
            <div className="row">
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
        console.log(dataTeacher);
      result = dataTeacher.map((item, index) => {
        return (
          <TeamMember
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
