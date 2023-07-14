import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './commentForm.css'
// import axios from 'axios'

function commentForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    let [comment, setComment] = useState('')

    const handleComment = (event) => {
        event.preventDefault()
        dispatch({ type: 'SET_COMMENTS', payload: comment })
        goToReviewForm()
    }

    const goToReviewForm = () => {
        history.push('/review');
      }

    return (
        <>
        <div className='comment-container'>
            <form onSubmit={handleComment}>
                <h1>Any comments you'd like to add?</h1>
                <input type="text"
                onChange={(event) => setComment(event.target.value)}/>
                <button type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default commentForm