import React, { Component } from "react"
import "./UserProfileCss.css"
import CardExam from "../CardExam/CardExam"
import FormInfo from '../FormInfo/FormInfo'
import swal from "sweetalert"
import axios from "axios"
import Loading from '../../Loading/Loading'
import * as USER from '../../../constant'
import Table from "../Table/Table"
import { Redirect } from "react-router-dom";


class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[
        
      ],
      token: '',
      subjects: [],
      userClasses: null,
      userExam: null
    }
  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserClass();
    this.getUserNextExam();
    this.getUserDoneExam();
  }

  getUserClass() {
    this.onLoading(true);

    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/userprofile/classes", {
      headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }
    })
    
    .then( res => {
      const response = res.data.data

      if(response[0]){
          let classes = []
          let subjects = []

    
          response.map( item => {
            subjects.push(item.class.subject.name)
            classes.push({
              className: item.class.name,
              dateStart: item.class.course.day_start,
              dateEnd: item.class.course.day_end,
              teacher: item.class.teacher.name
            })
          })

          this.setState({ 
            userClasses: {
              classes: classes,
              subjects: subjects
            }
          })
        }
      })
  }

  getUserNextExam() {
    this.onLoading(true);
    
    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/exams/userprofile/next_exams", {
      headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }
    })
    
    .then( res => {
      const response = res.data.data;
      if(response[0]){
        let exam = []
        let subjects = []

        response.map( item => {
          subjects.push(item.id_exams.class.subject.name);
          exam.push({
            id: item.id,
            className: item.id_exams.class.name,
            dateStart: item.id_exams.date_begin,
            timeStart: item.id_exams.time_begin,
            duration: item.duration
          });
        });

        this.setState({
          userExam:{
            exam: exam,
            subjectsExam: subjects
          }
        })
      }
    })
  }

  getUserDoneExam() {
    this.onLoading(true);
    
    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/exams/userprofile/done_exams", {
      headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }
    })
    
    .then( res => {
      console.log(res);
      // const response = res.data.data;

      // if(response[0]){
      //   let exam = []
      //   let subjects = []

      //   response.map( item => {
      //     subjects.push(item.id_exams.class.subject.name);
      //     exam.push({
      //       className: item.id_exams.class.name,
      //       dateStart: item.id_exams.date_begin,
      //       timeStart: item.id_exams.time_begin,
      //       duration: item.duration
      //     });
      //   });

      //   this.setState({
      //     userExam:{
      //       exam: exam,
      //       subjectsExam: subjects
      //     }
      //   })
      // }
    })
  }

  getUserInfo() {
    let userInfo = {}
    this.onLoading(true)
    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/userprofile/infor",
      { headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }}
    )
    
    .then(res => {
      this.onLoading(false)

      userInfo = {
        name: res.data.data.name,
        email: res.data.data.email,
        phone: res.data.data.phone,
        password: null
      }
      this.setState({userInfo : userInfo})
      let user = []
      for (const [key, value] of Object.entries(userInfo)) {
        user.push({name: key, content: value})
      }
      this.setState({user})
    })

    .catch(err => {
      this.onLoading(false)
      const status = err.response.status;
      if(status === 400) {

        swal(`Not found`);

      } else if(status === 401) {

        swal(`Please Login again to use this feature.`, {
          icon: "error",
        })

        .then(value => {
            this.setState({isLog: 'not'})
        })

      } else {
        swal(`There is an error with the server, please try again.`, {
          icon: "error",
        })
      }
    })
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
    })
    
    .then((value) => {
      if(value){

        this.onLoading(true)

        let data = this.checkInfo()
        axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/updateUser', data, {
          headers: {
            'Authorization': USER.TOKEN()
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

          const status = err.response.status;
          if(status === 401) {
            swal(`Please login again to use this feature`, {
              icon: "error",
            });
          } else {
            swal(`There is something wrong with the server, please try again`, {
              icon: "error",
            });
          }
        })
      }
    })
  }
  

  render() {

    const { userClasses, userExam } = this.state;

    return (
      <div className="mb-5">

        {/* check to go back login page */}
        {this.state.isLog ? (
          this.state.isLog === "not" ? (
            <Redirect to="/login" className="nav-link"></Redirect>
          ) : null
        ) : null}

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

                {/* user classes */}
                { userClasses ? <Table userClasses={userClasses} title="Your Classes"/> : null }
                {/* {this.state.examDone ? this.state.examDone.map((key, item) => {}) : null} */}

                {/* user exam */}
                { userExam ? <Table userExam={userExam} title="Next Exam"/> : null }
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
