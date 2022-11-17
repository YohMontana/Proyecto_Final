import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Preguntas from './components/pages/Preguntas';
import Reclamaciones from './components/pages/Reclamaciones';
import Terminos from './components/pages/Terminos';
import './App.css';

function App() {
  return (
   
      <Router>
        
          <Footer/>
      
       
      </Router>
      
    

   
  );
}

export default App;
