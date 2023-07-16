import { useHistory } from 'react-router-dom';


function SubmitSuccess() {

    const history = useHistory();


    const goToFeelingForm = () => {
        history.push('/');
    };

    return (
        <div>
            <form onSubmit={goToFeelingForm}>
                <h2>Thank You!</h2>
                <button type="submit">Leave New Feedback</button>
            </form>
        </div>
    )
}

export default SubmitSuccess