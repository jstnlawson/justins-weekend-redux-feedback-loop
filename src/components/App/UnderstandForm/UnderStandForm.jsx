import React, { useState } from 'react';
import './UnderstandForm.css'
// import axios from 'axios'

function UnderstandForm() {

    let [understandToAdd, setUnderstandToAdd] = useState({ understanding: 0 })

    const handleUnderstand = (event) => {
        setUnderstandToAdd({
            ...understandToAdd,
            understanding: event.target.value,
        });
    }

    return (
        <>
        <div className='understand-container'>
            <form onSubmit={(event) => setUnderstandToAdd(event)}>
                <h1>How well did you understand the material today?</h1>
                <input
                    type="number"
                    placeholder='1 to 5'
                    min="1" max="5" />
                <button
                    type="submit"
                    onChange={handleUnderstand}>Next</button>
            </form>
        </div>
        </>
    )
}

export default UnderstandForm