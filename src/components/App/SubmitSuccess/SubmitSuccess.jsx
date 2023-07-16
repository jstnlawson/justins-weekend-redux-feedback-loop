import { useHistory } from 'react-router-dom';


function SubmitSuccess() {

    const history = useHistory();


    const goToFeelingForm = () => {
        history.push('/');
    };

    return (
        <div>

            <h2>Thank You!</h2>
            <button onClick={goToFeelingForm}>Leave New Feedback</button>

        </div>
    )
}

export default SubmitSuccess