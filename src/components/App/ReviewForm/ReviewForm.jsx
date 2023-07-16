import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

function ReviewForm() {
    // const dispatch = useDispatch()
    const history = useHistory()
    const feeling = useSelector((state) => state.surveyReducer.feeling)
    const understanding = useSelector((state) => state.surveyReducer.understanding)
    const support = useSelector((state) => state.surveyReducer.support)
    const comments = useSelector((state) => state.surveyReducer.comments)

    const addSurvey = (event) => {
        event.preventDefault()
        

        const surveyToAdd = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }

        axios.post('survey', surveyToAdd)
            .then(response => {
                goToSuccessForm()
            }).catch(err => {
                console.log('error adding survey info: ', err)
            })

        let text;
        if (confirm("Are you sure?") == true) {
            text = "You pressed OK!";
        } else {
            text = "You canceled!";
        }
    };

    const goToSuccessForm = () => {
        history.push('/success');
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
            <br /><br />
            <p>Feelings: {feeling}</p>
            <br />
            <p>Understanding: {understanding}</p>
            <br />
            <p>Support: {support}</p>
            <br />
            <p>Comments: {comments}</p>
            <br />
            <button onClick={addSurvey} type="submit">Submit</button>
        </>
    )
}

export default ReviewForm