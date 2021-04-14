import axios from 'axios'
import AllSubject from './share/allSubject/AllSubject'
// const Test = props => {
//     const {steps} = props
//     const lastValue = steps.loadJavascriptCourse.value
    
//     return(
//         <div className='row'>
//             <div className='col-6 text-center' onClick={()=>window.location.href = 'https://fb.com'}>
//                 <img alt='' className="col-12" src='https://hackernoon.com/images/z2xg2bpo.jpg'></img>
//                 <a href="https://reactjs.org/" style={{fontStyle:'oblique'}}>ReactJS course 1</a>
//             </div>
//             <div className='col-6 text-center' onClick={()=>window.location.href = 'https://fb.com'}>
//                 <img alt='' className="col-12" src='https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png'></img>
//                 <a href="https://reactjs.org/" style={{fontStyle:'oblique'}}>ReactJS course 2</a>
//             </div>
//             <div className='col-6 text-center' onClick={()=>window.location.href = 'https://fb.com'}>
//                 <img alt='' className="col-12" src='https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png'></img>
//                 <a href="https://reactjs.org/" style={{fontStyle:'oblique'}}>ReactJS course 2</a>
//             </div>
//         </div>
//     )
// }

// const botAvatar = "https://i.pinimg.com/564x/07/65/a6/0765a691dbfa90d99821e88cdf8e71dd.jpg"
// const course = ['Javascript', 'Java', 'C++', 'PHP']

// const courseObject = []
// course.map(item => courseObject.push({value: item, label: item, trigger:()=> item}))

// const steps = [
//     {
//         id: 'hello',
//         message: 'Welcome to react chatbot! What is your name?',
//         trigger: 'waitInputName',
//     },
//     {
//         id: 'errorName',
//         message: 'Please enter a string',
//         trigger:'waitInputName'
//     },
//     {
//         id: 'waitInputName',
//         placeholder: 'Name',
//         user: true,
//         trigger: (value) => {
//             if (+value.value){
//                 return 'errorName';
//             }
//             else {
//                 return 'helloWithName';
//             }
//         }
//     },
//     {
//         id: 'helloWithName',   
//         message: 'Hello {previousValue}, what do you want to learn today?',
//         trigger: 'showOptionCourse',
//     },
//     {
//         id: 'showOptionCourse',
//         options: courseObject
//     },
//     {
//         id:'loadJavascriptCourse',
//         options:[
//             {value: 'ReactJS',label:'ReactJS', component:<Test/>, end:true},
//             {value: 'ReactNative',label:'ReactNative', end:true},
//         ]
//     },
// ];
// //get index of step: showOptionCourse
// const indexOfShowOptionCourse = steps.findIndex(item => item.id ==='showOptionCourse') + 1
// //map all the options and add to the steps
// course.map(item => steps.splice(indexOfShowOptionCourse, 0, {id: item, message: `Loading ${item} course`, trigger:()=> `load${item}Course`}))

// export const config ={

//     floating: true,
//     steps: steps,
//     botAvatar: botAvatar,
//     headerTitle: 'AI run by rice',
//     botDelay:0,
//     handleEnd: (value)=> {
//         // window.location.href = value.values.pop()
//     },
//     background:'#353740'
// };

const botAvatar = "https://i.pinimg.com/564x/07/65/a6/0765a691dbfa90d99821e88cdf8e71dd.jpg"
const course = ['Javascript', 'Java', 'C++', 'PHP']

const courseObject = []
course.map(item => courseObject.push({value: item, label: item, trigger:()=> item}))

const steps = [
    {
        id: 'hello',
        message: 'Welcome to react chatbot! What is your name?',
        trigger: 'waitInputName',
    },
    {
        id: 'errorName',
        message: 'Please enter a string',
        trigger:'waitInputName'
    },
    {
        id: 'waitInputName',
        placeholder: 'Name',
        user: true,
        trigger: (value) => {
            if (+value.value){
                return 'errorName';
            }
            else {
                return 'helloWithName';
            }
        }
    },
    {
        id: 'helloWithName',   
        message: 'Hello {previousValue}, what do you want to learn today?',
        trigger: 'showOptionCourse',
    },
    {
        id: 'showOptionCourse',
        component: <AllSubject/>,
        end: true
    }
];
//get index of step: showOptionCourse
const indexOfShowOptionCourse = steps.findIndex(item => item.id ==='showOptionCourse') + 1
//map all the options and add to the steps
course.map(item => steps.splice(indexOfShowOptionCourse, 0, {id: item, message: `Loading ${item} course`, trigger:()=> `load${item}Course`}))

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