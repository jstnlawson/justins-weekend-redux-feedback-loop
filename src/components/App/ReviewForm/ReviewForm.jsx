


function ReviewForm() {

    const addSurvey = (event) => {
        event.preventDefault();
    
        axios.post('survey',
          surveyToAdd
        ).then(response => {
          setSurveyToAdd('')
        }).catch(err => {
          console.log('error adding survey info: ', err);
        })
      };

    return (
        <>
        <h1>Review Your Feedback</h1>
        <br /><br />
        <p>Feelings: </p>
        <br />
        <p>Understanding: </p>
        <br />
        <p>Support: </p>
        <br />
        <p>Comments: </p>
        <br />
        <button onClick={addSurvey}type="submit">Submit</button>
        </>
    )
}

export default ReviewForm