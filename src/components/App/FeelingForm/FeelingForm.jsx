import React, { useState } from 'react';
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

    return (
        <div className="feeling-container">
            <form onSubmit={handleFeeling}>
                <h1>How are you feeling today?</h1>
                <input
                    type="number"
                    placeholder="1 to 5"
                    min="1"
                    max="5"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default FeelingForm