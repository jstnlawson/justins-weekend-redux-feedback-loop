import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './UnderstandForm.css'
// import axios from 'axios'

function UnderstandForm() {

    const history = useHistory();
    let [understandToAdd, setUnderstandToAdd] = useState({ understanding: 0 })

    const handleUnderstand = (event) => {
        setUnderstandToAdd({
            ...understandToAdd,
            understanding: event.target.value,
        });
        goToSupportForm()
    }

    const goToSupportForm = () => {
        history.push('/support');
      }

    return (
        <>
        <div className='understand-container'>
            <form onSubmit={handleUnderstand}>
                <h1>How well did you understand the material today?</h1>
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

export default UnderstandForm