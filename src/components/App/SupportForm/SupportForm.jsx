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
                    placeholder='1 to 5'
                    min="1" max="5" 
                    onChange={(event) => setSupport(event.target.value)}/>
                <button type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default supportForm