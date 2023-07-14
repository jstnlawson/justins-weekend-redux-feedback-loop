import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './FeelingForm.css'
// import axios from 'axios'

function FeelingForm() {

    const history = useHistory();
    let [feelingToAdd, setFeelingToAdd] = useState({ feeling: 0 })

    const handleFeeling = (event) => {
        setFeelingToAdd({
            ...feelingToAdd,
            feeling: event.target.value,
        });
        goToUnderstandForm()
    }

    const goToUnderstandForm = () => {
        history.push('/understand');
      }

    return (
        <>
        <div className='feeling-container'>
            <form onSubmit={handleFeeling}>
                <h1>How are you feeling today?</h1>
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

export default FeelingForm