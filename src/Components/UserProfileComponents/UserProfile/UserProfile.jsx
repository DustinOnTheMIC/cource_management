import React, { Component } from "react";
import "./UserProfileCss.css";
import CardExam from "../CardExam/CardExam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave} from '@fortawesome/free-solid-svg-icons'
import FormInfo from '../FormInfo/FormInfo'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[
        
      ]
    }
  }

  componentDidMount() {
    let userInfo = [
      {name: 'Dustin On The MIC'},
      {email: 'Buiductinwork@gmail.com'},
      {phone: '(+84) 999 999 999'},
      {password: '**************'}
    ]
    
    let user = []
    userInfo.forEach(item => {
      user.push(
        {
          name: Object.getOwnPropertyNames(item)[0],
          content: Object.values(item)[0]
        }
      )
    })
    this.setState({user})
  }
  
  onUpdateValue = (a,arg) => {
    let index = this.state.user.findIndex(item => item.name === a)
    let user = this.state.user.filter(item => item.name !== a)
    user.splice(index, 0, {name: a, content: arg})
    this.setState({user:user})
  }
  

  render() {
    return (
      <div className="mb-5">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{
            backgroundImage: `url("https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg")`,
          }}
        >
          <div className="container introduce">
            <div className="text-center row ">
              <div className="col-12">
                <h1 className="text-light">Hi Dustin On The MIC</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar col-5 col-xl-4 col-lg-5 col-md-6">
                      <img
                        src="https://i.pinimg.com/564x/fc/8f/4b/fc8f4bf12fdaa964f267e79d83324ab3.jpg"
                        alt="Circle"
                        className="img-raised rounded-circle img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="name d-flex flex-wrap mt-4 justify-content-center">
                  <div className="panel col-md-10 col-12 d-flex justify-content-center flex-column mb-5">
                    <h1 className="title">Bio Graph</h1>
                    <div className="panel-body bio-graph-info">
                      {this.state.user.map(item => {
                        return <FormInfo
                          key={item.name}
                          name={item.name} 
                          content={item.content} 
                          onUpdateValue={this.onUpdateValue}/>
                      })}
                    </div>
                    <div className="item-submit-info">
                      <button className="btn btn-custom">
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <h1 className="title col-12 text-center">Your Exam</h1>
                <div className="d-flex flex-wrap justify-content-center">
                  <CardExam
                    subject="Javascript"
                    img="https://tinhocaz.com/wp-content/uploads/2020/10/validate-js.png"
                  />
                  <CardExam
                    subject="Java"
                    img="https://www.techtalkthai.com/wp-content/uploads/2015/12/java_banner.jpg"
                  />
                  <CardExam
                    subject="PHP"
                    img="http://dotnetguru.org/wp-content/uploads/2019/08/php.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
