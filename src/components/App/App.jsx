import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';

import FeelingForm from './FeelingForm/FeelingForm';
import UnderstandForm from './UnderstandForm/UnderStandForm';
import SupportForm from './SupportForm/SupportForm'
import CommentForm from './CommentForm/CommentForm'

function App() {

  const addToSurvey = (event) => {
    event.preventDefault();

    axios.post('/api/order',
      customerToAdd
    ).then(response => {
      setCustomerToAdd('')
    }).catch(err => {
      console.log('error adding customer info: ', err);
    })
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        
        
      
      </header>
      <Router>
        <Route exact path="/feeling">
          <FeelingForm />
        </Route>
        <Route exact path="/understand">
          <UnderstandForm />
        </Route>
        <Route exact path="/support">
          <SupportForm />
        </Route>
        <Route exact path="/comment">
          <CommentForm />
        </Route>
        
        
        
      </Router>

    </div>
  );
}

export default App;
