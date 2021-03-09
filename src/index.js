import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Assets/Css/animate.css'
import './Assets/Css/aos.css'
import './Assets/Css/flaticon.css'
import './Assets/Css/glightbox.min.css'
import './Assets/Css/style.css'
import './Assets/Css/tiny-slider.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
