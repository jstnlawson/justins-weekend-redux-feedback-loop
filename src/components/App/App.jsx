import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';

import FeelingForm from './FeelingForm/FeelingForm';
import UnderstandForm from './UnderstandForm/UnderStandForm';
import SupportForm from './SupportForm/SupportForm'
import CommentForm from './CommentForm/CommentForm'
import ReviewForm from './ReviewForm/ReviewForm'

function App() {

  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path='/'>
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
        <Route exact path="/review">
          <ReviewForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
