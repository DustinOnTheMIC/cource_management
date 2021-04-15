import React, { Component } from "react"
import "./UserProfileCss.css"
import CardExam from "../CardExam/CardExam"
import FormInfo from '../FormInfo/FormInfo'
import swal from "sweetalert"
import axios from "axios"
import Loading from '../../Loading/Loading'
import * as USER from '../../../constant'
import NextExam from "../NextExam/NextExam"

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[
        
      ],
      token: ''
    }
  }

  componentDidMount() {
    let userInfo = { //sau này đổi nó thành cái axios gọi request lên để lấy info về
      name: 'Dustin On The MIC',
      email: 'Buiductinwork@gmail.com',
      phone: '(+84) 999 999 999',
      password: null,
    }

    // USE VALIDATION => checkValidate.checkValidate('email','thanhson') => true return ''

    this.setState({userInfo : userInfo})
    this.setState({token: `Bearer ${USER.TOKEN()}`})
    let user = []
    for (const [key, value] of Object.entries(userInfo)) {
      user.push({name: key, content: value})
    }
    this.setState({user})
  }

  onLoading = (status) => {
    this.setState({isLoading: status})
  }
  
  onUpdateValue = (a,arg) => {
    let index = this.state.user.findIndex(item => item.name === a)
    let user = this.state.user.filter(item => item.name !== a)
    user.splice(index, 0, {name: a, content: arg})
    this.setState({user:user})
    document.getElementById('btnSave').classList.remove('d-none')
    this.onLoading(false)
  }

  checkInfo(){
      const nameChanged = this.state.user[0].content
      const phoneChanged = this.state.user[2].content
      const passwordChanged = this.state.user[3].content
      const {name, phone, password} = this.state.userInfo
      if(nameChanged !== name && phoneChanged !== phone && passwordChanged !== password){
        return {name: nameChanged, phone: phoneChanged, password: passwordChanged}
      }else if(nameChanged !== name && phoneChanged !== phone){
        return {name: nameChanged, phone: phoneChanged}
      }else if(nameChanged !== name){
        return {name: nameChanged}
      }
  }

  handleSaveUserInfo = e => {
    e.preventDefault()
    swal({
      text: `Are you sure to change this value?`,
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if(value){
        this.onLoading(true)
        let data = this.checkInfo()
        axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/updateUser', data, {
          headers: {
            'Authorization': this.state.token
          }
        })
        .then(res => {
          this.onLoading(false)
          swal(`Done! You just changed your information`, {
            icon: "success",
          });
        })
        .catch(err => {
          this.onLoading(false)
          swal(`There is something wrong with the server, please try again`, {
            icon: "warning",
          });
        })
      }
    })
  }
  

  render() {
    return (
      <div className="mb-5">
        {this.state.isLoading ? <Loading/> : null}
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
                          onUpdateValue={this.onUpdateValue}
                          onLoading={this.onLoading}/>
                      })}
                    </div>
                    <div className="item-submit-info">
                      <button
                        id='btnSave'
                        className="btn btn-custom d-none" 
                        onClick={e => this.handleSaveUserInfo(e)}
                        title="If not click this button, the information you changed will never been saved">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* next exam */}
                <NextExam/>


                {/* {this.state.examDone ? this.state.examDone.map((key, item) => {}) : null} */}

                <h1 className="title col-12 text-center">Your Exam</h1>
                <div className="d-flex flex-wrap justify-content-center">

                  {this.state.examDone ? this.state.examDone.map((key,example) => <CardExam />)  : null}

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
