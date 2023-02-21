import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'
import FunFacts from './FunFacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// ReactDOM.render(navbar, document.getElementById("root")) --> old way, this is how to do before React 18


function FirstReact(){
  return (
    <div className = 'main'>
    <Navbar />
    <FunFacts />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<FirstReact />);
