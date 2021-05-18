import React from 'react';

import Home from '../Pages/Home';
import AllClass from '../Pages/AllClass';
import Team from '../Pages/Team';
import Contact from '../Pages/Contact';
import Blogs from '../Pages/Blogs';
import Pricing from '../Pages/Pricing';
import About from '../Pages/About';
import UserProfile from '../Pages/UserProfile';
import Error404 from '../Pages/Error404/Error404';
import Login from '../Pages/Login'
import TeacherProfile from '../Pages/TeacherProfile'
// EXAM
import TestDetail from '../Pages/TestDetail';
import DoTest from '../Pages/DoTest';
import ResultTest from '../Pages/ResultTest';

const routes = [
    {
        path : '/',
        name : 'Home',
        exact : true,
        main: () => <Home />
    },
    {
        path : '/all_class',
        name : 'AllClass',
        exact : true,
        main: (history) => <AllClass history={history} />
    },
    {
        path : '/team',
        name : 'Team',
        exact : true,
        main: () => <Team />
    },
    {
        path : '/contact',
        name : 'Contact',
        exact : true,
        main: () => <Contact />
    },
    {
        path : '/blogs',
        name : 'Blogs',
        exact : true,
        main: () => <Blogs />
    },
    {
        path : '/pricing',
        name : 'Pricing',
        exact : true,
        main: () => <Pricing />
    },
    {
        path : '/about',
        name : 'About',
        exact : true,
        main: () => <About />
    },
    {
        path : '/profile',
        name : 'About',
        exact : true,
        main: () => <UserProfile />
    },
    {
        path : '/teacher/:id_teacher/profile',
        name : 'TeacherProfile',
        exact : true,
        main: ({match}) => <TeacherProfile match={match} />
    },
    {
        path : '/login',
        name : 'Login',
        exact : true,
        main: () => <Login />
    },
    {
        path : '/subject/:id_subject/class',
        name : 'ClassOfSubject',
        exact : true,
        main: ({match}) => <AllClass match={match}/>
    },
    {
        path : '/class/chatbot/:id_subject/:level',
        name : 'ClassOfSubject',
        exact : true,
        main: ({match}) => <AllClass match={match}/>
    },
    {
        path : '/class/chatbot/all/:level',
        name : 'ClassOfSubject',
        exact : true,
        main: ({match}) => <AllClass match={match}/>
    },
     // EXAM
     {
        path : '/:idExam/detail_test',
        name : 'TestDetail',
        exact : true,
        main : ({match,history}) => <TestDetail match={match} history={history} />
    },
    {
        path : '/do_test/:idTest/to_do',
        name : 'DoTest',
        exact : true,
        main : ({ match,history}) => <DoTest match={ match} history={history} />
    },
    {
        path : '/result_test',
        name : 'ResultTest',
        exact : true,
        main : () => <ResultTest  />
    },
    {
        path : '*',
        name: 'NotFound',
        exact : true,
        main: ({history}) => <Error404 history={history}/>
    },
   
];



export default routes;
