import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import routes from './Routers/route'
import Header from './Components/Header/Index'
import Footer from './Components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  one: true,
});

class App extends React.Component {
  render(){

    return (
      <Router>
        <Header />
        <main>
          {this.showRouter(routes)}
        </main>
        <Footer />
      </Router>
  );
}
showRouter = (routes) =>{
  let result = null;
  if(routes.length > 0){
    result = routes.map((route,index) => {
      return (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    })
  }
  return result;
}
}

export default App;
