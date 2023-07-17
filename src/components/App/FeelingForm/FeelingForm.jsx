import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './FeelingForm.css'

function FeelingForm() {
    const dispatch = useDispatch()
    const history = useHistory();
    const [feeling, setFeeling] = useState('');


    const handleFeeling = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_FEELING', payload: feeling });
        goToUnderstandForm();
    };

    const goToUnderstandForm = () => {
        history.push('/understand');
    };

    const handleAlert = (event) => {
        if (feeling === '') {
            event.preventDefault(); // Prevent following the link
            alert('Please fill in the field before proceeding.');
          }
       };

       //there's a lot going on between the "onSubmit", "onChange", and "onClick"
       //stuff here. Lots of trial and error getting it all to work without
       //throwing errors

    return (
        <div className="feeling-container">
            <form onSubmit={handleFeeling}>
                <h1>How are you feeling today?</h1>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                    
                />
                <button onClick={handleAlert} type="submit">Next</button>
            </form>
        </div>
    );
}

export default FeelingForm