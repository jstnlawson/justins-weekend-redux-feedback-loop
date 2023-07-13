import React, { useState } from 'react';
import './commentForm.css'
// import axios from 'axios'

function commentForm() {

    let [commentToAdd, setCommentToAdd] = useState({ comments: '' })

    const handleComment = (event) => {
        setCommentToAdd({
            ...commentToAdd,
            comments: event.target.value,
        });
    }

    return (
        <>
        <div className='comment-container'>
            <form onSubmit={(event) => setCommentToAdd(event)}>
                <h1>Any comments you'd like to add?</h1>
                <input type="text"/>
                <button
                    type="submit"
                    onChange={handleComment}>Next</button>
            </form>
        </div>
        </>
    )
}

export default commentForm