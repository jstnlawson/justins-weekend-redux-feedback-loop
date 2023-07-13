import React, { useState } from 'react';
import './supportForm.css'
// import axios from 'axios'

function supportForm() {

    let [supportToAdd, setSupportToAdd] = useState({ support: 0 })

    const handleSupport = (event) => {
        setSupportToAdd({
            ...supportToAdd,
            support: event.target.value,
        });
    }

    return (
        <>
        <div className='support-container'>
            <form onSubmit={(event) => setSupportToAdd(event)}>
                <h1>How well are you being supported today?</h1>
                <input
                    type="number"
                    placeholder='1 to 5'
                    min="1" max="5" />
                <button
                    type="submit"
                    onChange={handleSupport}>Next</button>
            </form>
        </div>
        </>
    )
}

export default supportForm