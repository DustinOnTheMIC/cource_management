import AllSubject from './share/allSubject/AllSubject'
import SuggestClass from './share/suggestClass/SuggestClass'

const botAvatar = "https://i.pinimg.com/564x/07/65/a6/0765a691dbfa90d99821e88cdf8e71dd.jpg";

const steps = [
    {
        id: 'hello',
        message: 'Welcome to react chatbot! what do you want me to help?',
        trigger: 'showOrder',
    },
    {
        id: 'showOrder',
        options:[
            {value: "suggestSubject", label:'Suggest subject', trigger: 'suggestSubject'},
            {value: "suggestWhatUserLike", label:'Suggest by what you like', trigger: 'suggestWhatUserLike'},
            {value: "suggestByScore", label:'Suggest By Score', trigger: 'askMath'}
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
                component: <AllSubject />,
                trigger: 'turnBack',
            },
    //suggest by what user like
        {
            id:"suggestWhatUserLike",
            message: 'Ok, so what do you like below',
            trigger: 'showHobby'
        },
            {
                id: "showHobby",
                options:[
                    {value: "webDevelopment", label:'Web development', trigger: 'webDevelopment'},
                    {value: "webDesign", label:'Web Design', trigger: 'webDesign'},
                ],
            },
    //suggest if user like web dev or design
                {
                    id: "webDevelopment",
                    message: 'web dev',
                    trigger: 'turnBack'
                },
                {
                    id: "webDesign",
                    message: 'web design',
                    trigger: 'turnBack'
                },
        {
            id: "turnBack",
            message: "again",
            trigger: 'showOrder'
        },
    //suggest by scores
        {
            id: "askMath", 
            message: 'What is your math scores?',
            trigger: 'math'
        },
        {
            id: "math",
            user: true,
            trigger: 'askLike'
        },
        {
            id: "askLike",
            options: [
                {value: "webDev", label: "Web development", trigger: "showResult"},
                {value: "design", label: "Design", trigger: "showResult"}
            ]
        },
            {
                id: "showResult",
                component: <SuggestClass/>,
                asMessage: true,
                trigger: "turnBack"
            }
];


export const config ={

    floating: true,
    steps: steps,
    botAvatar: botAvatar,
    headerTitle: 'AI run by rice',
    botDelay:0,
    handleEnd: (value)=> {
        // window.location.href = value.values.pop()
    },
    background:'#353740'
};