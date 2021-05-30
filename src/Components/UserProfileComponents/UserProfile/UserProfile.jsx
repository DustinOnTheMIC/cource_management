import React, { Component } from "react";
import "./UserProfileCss.css";
import CardExam from "../CardExam/CardExam";
import FormInfo from '../FormInfo/FormInfo';
import swal from "sweetalert";
import axios from "axios";
import Loading from '../../Loading/Loading';
import * as USER from '../../../constant';
import Table from "../Table/Table"
import { Redirect } from "react-router-dom";
import { axiosService } from '../../../Services/axiosServices';
import { API_CURRENT, API_URL } from "../../../env";
import { messageServices } from "../../../Services/messageService";
import defaultAvatar from '../../../Assets/images/img6.jpg';
class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[
        
      ],
      token: `Bearer ${USER.TOKEN()}`,
      subjects: [],
      userClasses: null,
      userExam: null,
      doneExam: null,
      avatar: ""
    }
  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserClass();
    this.getUserNextExam();
    this.getUserDoneExam();
  }

  getUserClass() {

    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/userprofile/classes", {
      headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }
    })
    
    .then( res => {
      const response = res.data.data;

      if(response[0]){
          let classes = [];
          let subjects = [];

          response.map( item => {
            subjects.push(item.class.subject.name)
            classes.push({
              className: item.class.name,
              dateStart: item.class.course.day_start,
              dateEnd: item.class.course.day_end,
              teacher: item.class.teacher.name
            })
            return 0;
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
          
          return 0;
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
    
    axios.get("https://quanlikhoahoc.herokuapp.com/api/v1/exams/userprofile/done_exams", {
      headers: {
        'Authorization': "Bearer "+ USER.TOKEN()
      }
    })
    
    .then( res => {
      console.log(res);
      const response = res.data.data;
      console.log({response});

      if(response && response[0]){
        let doneExam = []

        response.map( item => 
          doneExam.push({
            id: item.exams.id,
            className: item.class.name,
            subjectImage: item.class.subject.avatar,
            subjectName: item.class.subject.name,
            rightAns: item.right_ans,
            wrongAns: item.wrong_ans,
            scores: item.scores,
            examDate: item.exams.date_begin,
            examTime: item.exams.time_begin
          })
        );

        this.setState({
          doneExam: doneExam
        })
      }
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
      this.onLoading(false);
      let responsed  = res.data.data
      userInfo = {
        name: responsed.name,
        email: responsed.email,
        phone: responsed.phone,
        password: null
      }

      this.setState({ userInfo : userInfo });

      if(responsed.avatar){
        this.setState({ avatar: `${API_CURRENT}${responsed.avatar}` });
        
      } else {
        this.setState({ avatar: defaultAvatar });
      }

      let user = [];
      for (const [key, value] of Object.entries(userInfo)) {
        user.push({name: key, content: value})
      }
      this.setState({ user });
    })

    .catch(err => {
      this.onLoading(false);
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
    this.setState({isLoading: status});
  }
  
  onUpdateValue = (a,arg) => {
    let index = this.state.user.findIndex(item => item.name === a);
    let user = this.state.user.filter(item => item.name !== a);
    user.splice(index, 0, {name: a, content: arg});
    this.setState({user:user});
    document.getElementById('btnSave').classList.remove('d-none');
    this.onLoading(false);
  }

  checkInfo(){
    const nameChanged = this.state.user[0].content;
    const phoneChanged = this.state.user[2].content;
    const passwordChanged = this.state.user[3].content;
    const {name, phone, password} = this.state.userInfo;

    if(nameChanged !== name && phoneChanged !== phone && passwordChanged !== password) {
      return {name: nameChanged, phone: phoneChanged, password: passwordChanged}
    }
    else if(nameChanged !== name && phoneChanged !== phone) {
      return {name: nameChanged, phone: phoneChanged}
    }
    else if(nameChanged !== name && passwordChanged !== password) {
      return {name: nameChanged, password: passwordChanged}
    }
    else if(phoneChanged !== phone && passwordChanged !== password) {
      return {phone: phoneChanged, password: passwordChanged}
    }
    else if(nameChanged !== name) {
      return {name: nameChanged}
    }
    else if(phoneChanged !== phone) {
      return {phone: phoneChanged}
    }
    else if(passwordChanged !== password) {
      return {password: passwordChanged}
    }
  }

  handleSaveUserInfo = e => {
    
    e.preventDefault()

    swal({
      text: `Are you sure to change this info?`,
      buttons: true,
      dangerMode: true,
    })
    
    .then((value) => {
      if(value){

        this.onLoading(true);

        let data = this.checkInfo();
        axios.post('https://quanlikhoahoc.herokuapp.com/api/v1/updateUser', data, {
          headers: {
            Authorization: this.state.token
          }
        })

        .then(res => {
          this.onLoading(false);
          swal(`Done! You just changed your information`, {
            icon: "success",
          });
        })

        .catch(err => {

          this.onLoading(false);

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

  
  handleClickInput() {
    document.getElementById('choose_img').click();
  }

  handleUploadImage(file) {

    this.onLoading(true);

    let formData = new FormData();

    formData.append("file", file);

    let info = {
      url: API_URL.CHANGE_AVATAR,
      data: formData,
      token: this.state.token
    }

    axiosService.postService(info)
    .then( () => {
      this.onLoading(false);

      let src = URL.createObjectURL(file);
      document.getElementById('avatar').src = src;

      messageServices.showMessage('Done, you changed your avatar', messageServices.ICON.SUCCESS);
    })
    .catch( () => this.onLoading(false) );

  }

  render() {

    const { userClasses, userExam, avatar } = this.state;

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
                <h1 className="text-light">Hello {this.state.user[0] ? this.state.user[0].content : ""}</h1>
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
                    <div className="avatar img-div" onClick={this.handleClickInput}>
                      <img
                        id="avatar"
                        src={avatar}
                        alt="Circle"
                        className="img-raised rounded-circle img-fluid"
                      ></img>
                      <input id="choose_img" type="file" className="d-none" accept="image/*" onChange={e => this.handleUploadImage(e.target.files[0])} excludeAcceptAllOption={true}></input>
                    </div>
                  </div>
                </div>
                <div className="name d-flex flex-wrap justify-content-center">
                  <div className="panel col-md-10 col-12 d-flex justify-content-center flex-column mb-5">
                    <h1 className="title" style={{marginTop: "0"}}>Bio Graph</h1>
                    <div className="panel-body bio-graph-info">

                      {this.state.user.map(item => {
                        return <FormInfo
                          key={ item.name }
                          name={ item.name } 
                          content={ item.content } 
                          onUpdateValue={ this.onUpdateValue }
                          onLoading={ this.onLoading }/>
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
                
                { this.state.doneExam ? 
                  <div>
                    <h1 className="title col-12 text-center">Your Exam</h1>
                    <div className="d-flex flex-wrap justify-content-center">
                      {this.state.doneExam.map(item => <CardExam doneExam={ item }/>)}
                    </div>
                  </div>
                  : ""
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
