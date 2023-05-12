import './App.css';
import React, { useState } from 'react';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('black');
      document.body.style.background = '#212529'
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.background = 'white'
      showAlert("light mode has been enabled", "success");

    }
    
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
       {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
  <Route exact path="/home">*/}
              <TextForm showAlert= {showAlert} heading = "Enter the text to analyze" mode = {mode}/>
        </div>
            {/* 
      
      </Router>*/}
    </>
  );
}

export default App;
