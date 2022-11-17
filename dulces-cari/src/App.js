import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Components/footer/Footer'
import Preguntas from './Components/pages/Preguntas'
import Reclamaciones from './Components/pages/Reclamaciones'
import Terminos from './Components/pages/Terminos'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        
          <Footer/>
      
       
      </Router>
    </div>
    

   
  );
}

export default App;
