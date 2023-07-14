import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './commentForm.css'
// import axios from 'axios'

function commentForm() {

    const history = useHistory()
    let [commentToAdd, setCommentToAdd] = useState({ comments: '' })

    const handleComment = (event) => {
        setCommentToAdd({
            ...commentToAdd,
            comments: event.target.value,
        });
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
                <input type="text"/>
                <button type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default commentForm