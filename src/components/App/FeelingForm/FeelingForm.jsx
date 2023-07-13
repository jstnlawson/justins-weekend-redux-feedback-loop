import React, { useState } from 'react';
import './FeelingForm.css'
// import axios from 'axios'

function FeelingForm() {

    let [feelingToAdd, setFeelingToAdd] = useState({ feeling: 0 })

    const handleFeeling = (event) => {
        setFeelingToAdd({
            ...feelingToAdd,
            feeling: event.target.value,
        });
    }

    return (
        <>
        <div className='feeling-container'>
            <form onSubmit={(event) => setFeelingToAdd(event)}>
                <h1>How are you feeling today?</h1>
                <input
                    type="number"
                    placeholder='1 to 5'
                    min="1" max="5" />
                <button
                    type="submit"
                    onChange={handleFeeling}>Next</button>
            </form>
        </div>
        </>
    )
}

export default FeelingForm