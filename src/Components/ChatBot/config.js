import Subject from './share/allSubject/Subject';
import SuggestClass from './share/suggestClass/SuggestClass';
import Teacher from './share/TopTeacher/Teacher';
import logo from '../../Assets/images/icon_logo.png'
import botAvatar from "../../Assets/images/img5.jpg";
import userAvatar from '../../Assets/images/img2.jpg'

const steps = [
    {
        id: 'hello',
        message: 'Do you want me to help?',
        trigger: 'isNeedHelp',
    },
    {
        id: 'isNeedHelp',
        options:[{value: "yes", label: "Yes, show me things", trigger: 'showOrder'}]
    },
    {
        id:"isTurnBack",
        message:"Do you want to suggest something else?",
        trigger: "optionTurnBack"
    },
    {
        id: "optionTurnBack",
        options: [{value: "yes", label: "Yes, show me things", trigger: 'showOrder'}]
    },
    {
        id: 'showOrder',
        options:[
            {value: "suggestSubject", label:'I want to know all subject', trigger: 'suggestSubject'},
            {value: "suggestTopSubjects", label:'Show hot subject', trigger: 'topSubjects'},
            {value: "suggestTopTeacher", label:'Top teacher', trigger: 'topTeachers'},
            {value: "suggestByScore", label:"I don't know what to learn", trigger: 'askMath'},
            {value: "searchTeacher", label:"I want to find teacher name", trigger: 'searchTeacher'},
            {value: "searchSubject", label:"I want to find subject name", trigger: 'searchSubject'},
        ],
    },

    //suggest the subject for user
        {
            id: "suggestSubject",
            message: 'Here is our subjects that we have',
            trigger: 'showSubject'
        },
            {
                id: "showSubject",
                component: <Subject />,
                trigger: 'isTurnBack',
            },

    //suggest top subject
        {
            id:"topSubjects",
            message: 'Here is our trending subject that you can consider.',
            trigger: 'top3Subjects'
        },
        {
            id: "top3Subjects",
            component: <Subject isGetTop={true} />,
            trigger: 'isTurnBack'
        },

    //Suggest top teacher
        {
            id: "topTeachers",
            component: <Teacher isGetTop={true}/>,
            trigger: 'isTurnBack'
        },

    //suggest by scores
        {
            id: "askMath", 
            message: 'So, what is your math scores?',
            trigger: 'math'
        },
            {
                id: "math",
                user: true,
                validator: (value) => {
                    if (isNaN(value)) {
                      return 'Your scores should be a number';
                    } else if(value > 10) {
                        return 'Should be smaller or equal 10';
                    } else if(value < 0) {
                        return 'Should be greater than 0';
                    }
                    return true;
                },
                trigger: 'showResult'
            },
            {
                id: "showResult",
                component: <SuggestClass point={"previousValue"}/>,
                asMessage: true,
                end: true
            },
        
        // search teacher
        {
            id: "searchTeacher",
            message: "What is the teacher name?",
            trigger: "inputTeacherName",
        },
            {
                id: "inputTeacherName",
                user: true,
                trigger: "findTeacher"
            },
            {
                id: "findTeacher",
                component: <Teacher />,
                trigger: "isTurnBack"
            },
        // search subject
        {
            id: "searchSubject",
            message: "What is the subject name?",
            trigger: "inputSubjectName"
        },
            {
                id: "inputSubjectName",
                user: true,
                trigger: "findSubject"
            },
            {
                id: "findSubject",
                component: <Subject />,
                trigger: "isTurnBack"
            }
];


export const config ={

    floating: true,
    steps: steps,
    botAvatar: botAvatar,
    userAvatar: userAvatar,
    headerTitle: 
        <div>
            <img src={logo} alt="logo" style={{width: "20%", marginRight:"10px"}}></img>
            <i style={{color:"#b2bec3"}}>AI-401-21</i>
        </div>,
    botDelay:0,
    enableSmoothScroll: true,
    background:'#353740'
};
