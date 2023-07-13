import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from './FeelingForm/FeelingForm';
import UnderstandForm from './UnderstandForm/UnderStandForm';
import SupportForm from './SupportForm/SupportForm'

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
        <FeelingForm />
        <UnderstandForm />
        <SupportForm />
      </header>
    </div>
  );
}

export default App;
