import React from 'react';

import Home from '../Pages/Home';
import AllClass from '../Pages/AllClass';
import Team from '../Pages/Team';
import Contact from '../Pages/Contact';
import Blogs from '../Pages/Blogs';
import Pricing from '../Pages/Pricing';
import About from '../Pages/About';
import UserProfile from '../Components/UserProfileComponents/UserProfile/UserProfile'
import Error404 from '../Pages/Error404/Error404';


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
        main: () => <AllClass />
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
        path : '*',
        name: 'NotFound',
        exact : true,
        main: () => <Error404 />
    },
];



export default routes;
