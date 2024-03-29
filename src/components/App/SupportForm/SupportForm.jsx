import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './supportForm.css'
// import axios from 'axios'

function supportForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    let [support, setSupport] = useState('')

    const handleSupport = (event) => {
        event.preventDefault()
        dispatch({ type: 'SET_SUPPORT', payload: support })
        goToCommentForm()
    }

    const handleAlert = (event) => {
        if (support === '') {
            event.preventDefault(); // Prevent following the link
            alert('Please fill in the field before proceeding.');
          }
       };

    const goToCommentForm = () => {
        history.push('/comment');
      }

    return (
        <>
        <div className='support-container'>
            <form onSubmit={handleSupport}>
                <h1>How well are you being supported today?</h1>
                <input
                    type="number"
                    min="1" max="5" 
                    onChange={(event) => setSupport(event.target.value)}/>
                <button onClick={handleAlert} type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default supportForm