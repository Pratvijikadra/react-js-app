/* import './App.css';

   function App() {
  return (  
    // JSX format
     <>  
    <h1> welcome to react</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Pratvi
        </a>
      </header>
    </div>
    </>
    
  ); 
}

export default App;     */






import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

 function App(){

  const [Mode,setMode]=useState('light');   //whether dark mode is enabled or not
 const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null);
},2000);
  }
  


  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    
     /* setInterval(() => {
        document.title='TextUtils is Amazing Mode';
      }, 2000);
      
      setInterval(() => {
        document.title='Install TextUtils now';
      }, 1500);
      */
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
     


    }

  }
return(
    <>

    <Router>
   
     <Navbar title="TextUtils"  aboutText="About us" mode={Mode} toggleMode={toggleMode}  />  
{/* <Navbar/> */}

<Alert alert={alert}/>

<div className="container my-3">

<Routes>
          <Route path="/about" element={<About />} />
           

          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />}  />
         {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>  */}
          
        
    
        </Routes>
        </div>
        </Router>
    
          
       </>

  );
}

export default App;
