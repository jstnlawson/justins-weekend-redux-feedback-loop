import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './supportForm.css'
// import axios from 'axios'

function supportForm() {

    const history = useHistory()
    let [supportToAdd, setSupportToAdd] = useState({ support: 0 })

    const handleSupport = (event) => {
        setSupportToAdd({
            ...supportToAdd,
            support: event.target.value,
        });
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
                    min="1" max="5" />
                <button type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default supportForm