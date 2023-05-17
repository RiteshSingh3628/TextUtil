
import { useState } from 'react';
import './App.css';

import {BrowserRouter,Route, Routes} from "react-router-dom"

import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [mode,setMode] = useState("dark")
  const [alert, setAlert] = useState(null)
  

  // Alert message function
  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    // logic for 2 sec appearence of alert
    setTimeout(()=>{
      setAlert(null)
    },1000)

    
  }


  // Theme Switcher function
  const toggleMode = (e)=>{
    console.log("message",e )
    // setMode(e)
    if(mode == "dark"){
      document.body.style.background="black"
      console.log("message",e )
    }
    else if(mode == "light"){
      document.body.style.background="white"
      console.log("message",e )
    }
  }




  return (
    <div className="App">
      {/* navBar */}
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert ={alert}/>
        <div className="container my-3">
          <TextForm  heading = "Enter Text To Analyze" mode={mode} showAlert={showAlert} />
        </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/About' element={<About mode = {mode}/>} />
          <Route path='/' element={<TextForm heading = "Enter Text To Analyze" mode={mode} showAlert={showAlert} />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>      
      </BrowserRouter> */}
    </div>

   
  );
}

export default App;
