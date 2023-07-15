import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './UnderstandForm.css'
// import axios from 'axios'

function UnderstandForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    let [understanding, setUnderstanding] = useState('')

    const handleUnderstand = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTAND', payload: understanding })
        goToSupportForm()
    }

    const goToSupportForm = () => {
        history.push('/support');
      }

      const handleAlert = (event) => {
        if (understanding === '') {
            event.preventDefault(); // Prevent following the link
            alert('Please fill in the field before proceeding.');
          }
       };

    return (
        <>
        <div className='understand-container'>
            <form onSubmit={handleUnderstand}>
                <h1>How well did you understand the material today?</h1>
                <input
                    type="number"
                    placeholder='1 to 5'
                    min="1" max="5" 
                    onChange={(event) => setUnderstanding(event.target.value)}/>
                <button onChange={handleAlert} type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default UnderstandForm